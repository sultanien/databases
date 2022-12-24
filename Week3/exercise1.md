##  1. Columns violate 1NF

#### 1.1. **Single valued columns (each column should have atomic value, no multiple values)**

food_code and food_description columns include more than one value

#### 1.2. **Column domain (for any column) should not change**

dinner_date includes two type of values

## 2.Entities could be extracted

member_id PK| member_name   | member_address

food_id PK| food_description

dinner_id PK| dinner_date | venue_id FK | food_id FK

venue_id PK | venue_description

id PK | member_id FK | dinner_id FK (join table)



## Name all the tables and columns that would make a 3NF compliant solution

member: id | name   | address

food: id | description

dinner: id | date

venue: id | description