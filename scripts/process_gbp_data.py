
import pandas as pd
import json
import os
import openpyxl

# File definitions
CSV_FILE = r"d:\manish-tea-traders (3)\data\gbp_products.csv"
IMAGE_MAP_FILE = r"d:\manish-tea-traders (3)\data\uploaded_images.json"
TEMPLATE_EXCEL = r"d:\manish-tea-traders (3)\data\Bulk Product Upload Sample RE.xlsx" # Trying to interpret "Bulk Product Upload Sample RE.xlsx" as template or target logic
OUTPUT_EXCEL = r"d:\manish-tea-traders (3)\data\Updated_Bulk_Products.xlsx"

def process_data():
    # 1. Read the CSV data
    try:
        df_csv = pd.read_csv(CSV_FILE)
        print("Loaded CSV data.")
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return

    # 2. Read the Image Map
    image_map = {}
    if os.path.exists(IMAGE_MAP_FILE):
        with open(IMAGE_MAP_FILE, "r") as f:
            image_map = json.load(f)
        print("Loaded Image Map.")
    else:
        print("Warning: Image Map file not found. Images might not be updated.")

    # 3. Update Image URLs in DataFrame
    # Expected CSV columns based on view_file:
    # Product name, Select a category, Product price (INR), Product discounted price (INR), ... Image Link, Mark as Special
    
    # We need to find which local filename corresponds to each row. 
    # The 'Image Link' in CSV currently has URLs like "https://teatraders.info/images/products/organic_ctc_tea_user.jpg"
    # We need to extract the filename "organic_ctc_tea_user.jpg" and lookup in image_map.
    
    def get_new_image_url(old_url):
        if pd.isna(old_url):
            return old_url
        filename = old_url.split('/')[-1]
        if filename in image_map:
            return image_map[filename]
        return old_url

    if 'Image Link' in df_csv.columns:
        df_csv['Image Link'] = df_csv['Image Link'].apply(get_new_image_url)
        print("Updated Image URLs.")
    else:
        print("Column 'Image Link' not found in CSV.")

    # 4. Save to Excel
    # The user wanted to "fill it accordingly our products info into them" (referring to the excel sheet)
    # Since I don't know the exact structure of the Excel sheet target columns vs CSV columns, 
    # I will create a new Excel file that matches the CSV content but saved as Excel, 
    # OR if I should map to the "Bulk Product Upload Sample RE.xlsx".
    # Let's try to read the sample excel to see headers.
    
    # Writing to a new Excel file for now which is safer than modifying the sample directly without knowing mapping.
    # However, user asked to "update bulk product update excel sheet And fill it".
    # I will try to read the sample sheet to understand its schema in a separate step or just dump the CSV data to Excel.
    # For now, I will dump the cleaned data to Updated_Bulk_Products.xlsx
    
    try:
        df_csv.to_excel(OUTPUT_EXCEL, index=False)
        print(f"Successfully saved updated data to {OUTPUT_EXCEL}")
    except Exception as e:
        print(f"Error saving to Excel: {e}")

if __name__ == "__main__":
    process_data()
