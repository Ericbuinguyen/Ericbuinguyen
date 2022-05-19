public class CafeUtil {
    
    public int getStreakGoal(){
        int sum = 10;
        return sum;
    }

    public void printPriceChart(String name, double price, int man){

        System.out.println(name + '\n' + "1" + price);
    }

    public double getOrdertotal(double[] orderPrices){
        double sum = 0;
        for (double price: orderPrices){
            sum += price;   
        }
        return sum;
    }
    public String addCustomer(String name){
        String customer = name;
        return name;
    }
    public void displayMenu(String [], menu){
        for (String item: menu){
            System.out.println(item);
        }
    }
    public ArrayList<String> itemMenu(String[] items){
        ArrayList<String> coffees = new ArrayList<String>();

        for (int i = 0; i < items.length; i+=1){
            if(i>0){
                coffees.add(items[i]);
            }
            return coffees;
        }
    }
}
