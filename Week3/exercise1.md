##  1. Columns violate 1NF

#### 1.1. **Single valued columns (each column should have atomic value, no multiple values)**

food_code and food_description columns include more than one value

#### 1.2. **Column domain (for any column) should not change**

dinner_date includes two type of values

## 2.Entities could be extracted

member_id | member_name   | member_address

food_code | food_description

dinner_id | dinner_date

venue_code | venue_description 

## Name all the tables and columns that would make a 3NF compliant solution

member: id | name   | address

food: id | description

dinner: id | date

venue: id | description