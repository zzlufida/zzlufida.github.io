window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11694","name":"NE_Fitemss_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_Fitemss_View\r\nas\r\nselect item.citemcode,item.citemname,isnull(item.bclose,0) as bclose,item.citemccode,item.citem_class,class.citem_name as citem_className  \r\nfrom vwNEfitemss as item\r\ninner join fitem as class\r\n\ton item.citem_class=class.citem_class","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_Fitemss_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249418","object_id":"column-249418","name":"citemcode","name_without_path":"citemcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249419","object_id":"column-249419","name":"citemname","name_without_path":"citemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249420","object_id":"column-249420","name":"bclose","name_without_path":"bclose","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249421","object_id":"column-249421","name":"citemccode","name_without_path":"citemccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249422","object_id":"column-249422","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249423","object_id":"column-249423","name":"citem_className","name_without_path":"citem_className","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};