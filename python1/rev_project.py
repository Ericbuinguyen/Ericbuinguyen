import project_menu
from pymongo import MongoClient

cluster = MongoClient("mongodb://localhost:27017/")
db = cluster["Project"]

collection1 = db["main"]

collection2 = db["podcasts"]

collection3 = db["shows"]

project_menu.main_menu()
menu_option = int(input('Enter your option: '))
while menu_option != 0:
    if menu_option == 1:
        item_input = int(input('Enter the item number: '))
        item = collection1.find_one({'item': item_input})
        print("\nProduct name: " + item['product_name'])
        print("Quantity: " + str(item['quantity']))
        break
    elif menu_option == 2:
        project_menu.podcasts_menu()
        menu_option2 = int(input("Enter your option: "))
        while menu_option2 != 0:
            if menu_option2 == 1:
                for x in collection2.find():
                    print(f"ITEM: {x['item']} | Product Name: {x['product_name']}")
                exit()
            elif menu_option2 == 2:
                temp_item = int(input('Enter a item number: '))
                temp_name = str(input('Enter a product name: '))
                collection2.insert_one({'item': temp_item, 'product_name': temp_name})
                exit()
            elif menu_option2 == 3:
                print('This will delete the current information')
                temp_sku = int(input('Enter a item number : '))
                collection2.delete_one({'item': temp_item})
                exit()
    elif menu_option == 3:
        project_menu.shows_menu()     #call our menu
        menu_option3 = int(input("Enter your option: "))
        while menu_option3 != 0:
            if menu_option3 == 1:
                for x in collection3.find():
                    print(f"ITEM: {x['item']} | Product Name: {x['product_name']} | Quantity: {x['quantity_item']}")
                exit()
            elif menu_option3 == 2:
                temp_item = int(input('Enter a item number: '))
                temp_episodes = int(input('Enter quantity of episodes: '))
                collection3.update_one({'item': temp_item}, {"$set": {'quantity_item': temp_episodes}})
                print(f"You have successfully ordered {temp_episodes} of item number {temp_item}")
                exit()

    else:
        print("Invalid option.\n")
    project_menu.main_menu()
    menu_option = int(input('Enter your option: '))
