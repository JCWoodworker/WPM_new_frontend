def search_and_replace(file_name, old_text, new_text):
    with open(file_name, 'r') as f:
        content = f.read()

    modified_content = content.replace(old_text, new_text)

    with open(file_name, 'w') as f:
        f.write(modified_content)

    print(f"Replaced text in file: {file_name}")

# Specify the file name and the old and new text to replace
file_name = '.env.production'
old_text = 'https://wpm-new-backend-staging.herokuapp.com'
new_text = 'https://wpm-new-backend-production.herokuapp.com/'

# Call the function to search and replace the text
search_and_replace(file_name, old_text, new_text)
