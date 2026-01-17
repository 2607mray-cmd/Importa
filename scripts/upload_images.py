
import os
import requests
import json
import time

IMAGES_DIR = r"d:\manish-tea-traders (3)\data"
OUTPUT_FILE = r"d:\manish-tea-traders (3)\data\uploaded_images.json"

FILES_TO_UPLOAD = [
    "assam.png",
    "darjeeling_green_tea_user.jpg",
    "dooars_tea_dust_user.jpg",
    "finetea.jpg",
    "jjj.jpg",
    "kk2.jpg",
    "loose_tea_leaves_user.jpg",
    "nepal.jpg",
    "organic_ctc_tea_user.jpg",
    "orthodox.jpg",
    "orthodox_tea_user.jpg",
    "private_label.png",
    "priya_gold.png",
    "rajni_gold.png",
    "readystock.jpg",
    "savaan tea (2).png",
    "savaan_tea.png",
    "tea_bags_bulk.png"
]

UPLOAD_URL = "https://catbox.moe/user/api.php"

def upload_image(filename):
    filepath = os.path.join(IMAGES_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return None

    try:
        with open(filepath, "rb") as f:
            files = {"fileToUpload": f}
            data = {"reqtype": "fileupload"}
            response = requests.post(UPLOAD_URL, files=files, data=data)
            
            if response.status_code == 200:
                return response.text.strip()
            else:
                print(f"Failed to upload {filename}: {response.status_code} - {response.text}")
                return None
    except Exception as e:
        print(f"Error uploading {filename}: {e}")
        return None

def main():
    uploaded_map = {}
    
    # Load existing if any
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "r") as f:
            try:
                uploaded_map = json.load(f)
            except:
                pass

    for filename in FILES_TO_UPLOAD:
        if filename in uploaded_map:
            print(f"Already uploaded: {filename} -> {uploaded_map[filename]}")
            continue

        print(f"Uploading {filename}...")
        url = upload_image(filename)
        if url:
            print(f"Success: {url}")
            uploaded_map[filename] = url
            # Save progress
            with open(OUTPUT_FILE, "w") as f:
                json.dump(uploaded_map, f, indent=2)
        else:
            print(f"Failed to upload {filename}")
        
        time.sleep(1) # Be nice to the API

if __name__ == "__main__":
    main()
