window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10134","name":"CAQ_Price","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View CAQ_Price AS SELECT CA_AmoCt.iPeriod, CA_AmoCt.cPPID, CA_AmoCt.cBatch, Sum(CA_AmoCt.iFinPdtUnitAmo) AS iFinPdtUnitAmoOfSum, Sum(CA_AmoCt.iOnpTotalAmo) AS iOnpTotalAmoOfSum, Sum(CA_AmoCt.iTotalAmo) AS iTotalAmoOfSum From CA_AmoCt GROUP BY CA_AmoCt.iPeriod, CA_AmoCt.cPPID, CA_AmoCt.cBatch","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CAQ_Price"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174330","object_id":"column-174330","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174331","object_id":"column-174331","name":"cPPID","name_without_path":"cPPID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174332","object_id":"column-174332","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174333","object_id":"column-174333","name":"iFinPdtUnitAmoOfSum","name_without_path":"iFinPdtUnitAmoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174334","object_id":"column-174334","name":"iOnpTotalAmoOfSum","name_without_path":"iOnpTotalAmoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174335","object_id":"column-174335","name":"iTotalAmoOfSum","name_without_path":"iTotalAmoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};