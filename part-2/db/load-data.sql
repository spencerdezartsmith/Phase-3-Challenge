COPY items(name, price, section)
FROM '/Users/spencerdezartsmith/Desktop/LearnersGuild/Phase-3-Challenge/part-2/data/items.csv' DELIMITER ',' CSV HEADER;

COPY shoppers(name)
FROM '/Users/spencerdezartsmith/Desktop/LearnersGuild/Phase-3-Challenge/part-2/data/shoppers.csv' DELIMITER ',';

COPY orders(shopper_id, order_date)
FROM '/Users/spencerdezartsmith/Desktop/LearnersGuild/Phase-3-Challenge/part-2/data/orders.csv' DELIMITER ',';

COPY orders_items(order_id, item_id)
FROM '/Users/spencerdezartsmith/Desktop/LearnersGuild/Phase-3-Challenge/part-2/data/orders_items.csv' DELIMITER ',';
