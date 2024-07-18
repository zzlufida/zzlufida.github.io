window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10778","name":"fd_settleHead_date_v","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[fd_settleHead_date_v]  \r\nas\r\n\tselect head1.sid,head1.scode,head2.dsettle,head1.money_name,head1.exchange_rate,\r\n\t\thead1.parent_sid,head1.bill_name,head1.check_name\r\n\tfrom fd_settleHead as head1\r\n\t\tinner join fd_settleHead as head2\r\n\t\t\ton head1.parent_sid=head2.sid\r\n\t\twhere head1.dsettle is null\r\n\tunion\r\n\tselect head3.sid,head3.scode,head3.dsettle,head3.money_name,head3.exchange_rate,\r\n\t\thead3.parent_sid,head3.bill_name,head3.check_name\r\n\tfrom fd_settleHead as head3\r\n\t\twhere not head3.dsettle is null","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fd_settleHead_date_v"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204852","object_id":"column-204852","name":"sid","name_without_path":"sid","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204853","object_id":"column-204853","name":"scode","name_without_path":"scode","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204854","object_id":"column-204854","name":"dsettle","name_without_path":"dsettle","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204855","object_id":"column-204855","name":"money_name","name_without_path":"money_name","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204856","object_id":"column-204856","name":"exchange_rate","name_without_path":"exchange_rate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204857","object_id":"column-204857","name":"parent_sid","name_without_path":"parent_sid","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204858","object_id":"column-204858","name":"bill_name","name_without_path":"bill_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204859","object_id":"column-204859","name":"check_name","name_without_path":"check_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};