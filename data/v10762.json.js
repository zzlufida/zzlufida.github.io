window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10762","name":"fd_BillCode_v","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  VIEW dbo.fd_BillCode_v\r\nAS\r\nselect fd_entities.scaption + '-' + fd_transactions.transactions_code as BillCode,fd_transactions.bill_date,fd_transactions.bill_name  \r\n From fd_transactions inner join fd_entities on left(transactions_id,2) = fd_entities.ibitype  \r\n and  fd_entities.ibitype  in (41,43,45)  where isnull(fd_transactions.book_name,'') <> ''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fd_BillCode_v"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204630","object_id":"column-204630","name":"BillCode","name_without_path":"BillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"61","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204631","object_id":"column-204631","name":"bill_date","name_without_path":"bill_date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204632","object_id":"column-204632","name":"bill_name","name_without_path":"bill_name","description":null,"is_pk":false,"is_identity":false,"data_type":"fd_udt_username: nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};