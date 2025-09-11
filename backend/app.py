from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configuration
EXCEL_FILE_PATH = 'yosoc_applications.xlsx'
SHEET_NAME = 'Applications'

# Define the required headers for the Excel file
HEADERS = [
    "First Name", "Last Name", "Email Address", "Country", "Role", 
    "Experience Level", "Technical Skills", "Why Join YoSOC?", 
    "GitHub Profile", "Portfolio/Website", "Time Commitment", 
    "Agreed To Terms", "Updates Subscription", "Submission Date"
]

def create_excel_file_if_not_exists():
    """Create Excel file with headers if it doesn't exist"""
    if not os.path.exists(EXCEL_FILE_PATH):
        # Create a DataFrame with headers
        df = pd.DataFrame(columns=HEADERS)
        df.to_excel(EXCEL_FILE_PATH, sheet_name=SHEET_NAME, index=False)
        print(f"Created new Excel file: {EXCEL_FILE_PATH}")

def append_application_to_excel(data):
    """Append new application data to the Excel file"""
    try:
        # Read existing data
        if os.path.exists(EXCEL_FILE_PATH):
            df = pd.read_excel(EXCEL_FILE_PATH, sheet_name=SHEET_NAME)
        else:
            df = pd.DataFrame(columns=HEADERS)
        
        # Prepare new row data
        new_row = {
            "First Name": data.get('first_name', ''),
            "Last Name": data.get('last_name', ''),
            "Email Address": data.get('email', ''),
            "Country": data.get('country', ''),
            "Role": data.get('role', ''),
            "Experience Level": data.get('experience_level', ''),
            "Technical Skills": data.get('technical_skills', ''),
            "Why Join YoSOC?": data.get('why_join', ''),
            "GitHub Profile": data.get('github', ''),
            "Portfolio/Website": data.get('portfolio', ''),
            "Time Commitment": data.get('time_commitment', ''),
            "Agreed To Terms": data.get('agree_terms', False),
            "Updates Subscription": data.get('updates_subscription', False),
            "Submission Date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        # Append new row
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
        
        # Save to Excel
        df.to_excel(EXCEL_FILE_PATH, sheet_name=SHEET_NAME, index=False)
        
        return True
    except Exception as e:
        print(f"Error appending to Excel: {str(e)}")
        return False

@app.route('/submit', methods=['POST'])
def submit_application():
    """Handle form submission and store data in Excel"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({
                "status": "error",
                "message": "No data provided"
            }), 400
        
        # Validate required fields
        required_fields = ['first_name', 'last_name', 'email', 'country', 'role', 
                          'experience_level', 'technical_skills', 'why_join', 
                          'time_commitment', 'agree_terms']
        
        missing_fields = [field for field in required_fields if not data.get(field)]
        
        if missing_fields:
            return jsonify({
                "status": "error",
                "message": f"Missing required fields: {', '.join(missing_fields)}"
            }), 400
        
        # Create Excel file if it doesn't exist
        create_excel_file_if_not_exists()
        
        # Append data to Excel
        if append_application_to_excel(data):
            return jsonify({
                "status": "success",
                "message": "Application stored successfully"
            }), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Failed to store application data"
            }), 500
            
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": f"Server error: {str(e)}"
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "success",
        "message": "Flask backend is running"
    }), 200

@app.route('/applications', methods=['GET'])
def get_applications():
    """Get all applications (for admin purposes)"""
    try:
        if not os.path.exists(EXCEL_FILE_PATH):
            return jsonify({
                "status": "success",
                "data": [],
                "message": "No applications found"
            }), 200
        
        df = pd.read_excel(EXCEL_FILE_PATH, sheet_name=SHEET_NAME)
        applications = df.to_dict('records')
        
        return jsonify({
            "status": "success",
            "data": applications,
            "count": len(applications)
        }), 200
        
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": f"Error retrieving applications: {str(e)}"
        }), 500

if __name__ == '__main__':
    # Create the Excel file if it doesn't exist when starting the server
    create_excel_file_if_not_exists()
    
    print("Starting Flask backend server...")
    print(f"Excel file will be created at: {os.path.abspath(EXCEL_FILE_PATH)}")
    print("Available endpoints:")
    print("  POST /submit - Submit application form")
    print("  GET /health - Health check")
    print("  GET /applications - Get all applications")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
