# West Malvern Churchyard
Website for West Malvern Churchyard, cataloguing memorials and graves.

## Development
The website is built using Jekyll. CSV lists of graves and people buried/commemorated in the graveyard are used. They can be found in the `_data` folder.

### Guide for adding to CSV files
A Comma Separated Values file (or CSV for short) is a simple, common format for storing data in plaintext. It's like using a very simple spreadsheet. There are headings at the top of the file, and then every line after that is one row.

For this project we use two CSV files:
1. `people.csv` - this consists of all of the people we know are buried/commemorated in the churchyard.
2. `graves.csv` - this consists of all of the graves/memorials that are in the churchyard. There are some graves that do not have identifiable names.

If an entry for a field contains a comma, it **must** have a double speech mark (like this: `"`) at either end.

In the `people.csv` file, there are 6 fields:
1. `surname` (these are uppercase)
2. `forenames`
3. `date_of_death` (optional)
4. `age` (optional)
5. `notes` - any extra details (optional)
6. `grave_id` - list of unique identifiers for person's graves/memorials that is used to "link" the person to their graves

In the `graves.csv` file, there are 4 fields:
1. `id` - unique identifier for the grave/memorial that is used to "link" the graves to people
2. `type` - describe the appearance of the grave
3. `text` - write the inscription from the grave (optional)
4. `notes` - any extra details (optional)

