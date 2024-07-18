window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5394","name":"FB_FactData_Detail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FB_FactData_Detail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-63630","object_id":"column-63630","name":"iYear","name_without_path":"iYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5387","name":"FB_BgItem","name_show_schema":"dbo.FB_BgItem"}]},{"id":"column-63621","object_id":"column-63621","name":"cBgItemCode","name_without_path":"cBgItemCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5387","name":"FB_BgItem","name_show_schema":"dbo.FB_BgItem"}]},{"id":"column-63622","object_id":"column-63622","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63623","object_id":"column-63623","name":"cItemClass","name_without_path":"cItemClass","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63624","object_id":"column-63624","name":"cItemCategory","name_without_path":"cItemCategory","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63631","object_id":"column-63631","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63625","object_id":"column-63625","name":"cPeriodCode","name_without_path":"cPeriodCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63626","object_id":"column-63626","name":"fReserveValue","name_without_path":"fReserveValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63627","object_id":"column-63627","name":"fReserveValue_Total","name_without_path":"fReserveValue_Total","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63628","object_id":"column-63628","name":"fFactValue","name_without_path":"fFactValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63629","object_id":"column-63629","name":"fFactValue_Total","name_without_path":"fFactValue_Total","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_FB_FactData_Detail_BgItemCode","title":null,"description":null,"is_user_defined":false,"foreign_table":"FB_FactData_Detail","foreign_table_show_schema":"dbo.FB_FactData_Detail","foreign_table_verbose":"FB_FactData_Detail","foreign_table_verbose_show_schema":"dbo.FB_FactData_Detail","foreign_table_object_id":"t5394","primary_table":"FB_BgItem","primary_table_show_schema":"dbo.FB_BgItem","primary_table_verbose":"FB_BgItem","primary_table_verbose_show_schema":"dbo.FB_BgItem","primary_table_object_id":"t5387","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"iYear","foreign_column_path":null,"foreign_column":"iYear"},{"primary_column_path":null,"primary_column":"cBgItemCode","foreign_column_path":null,"foreign_column":"cBgItemCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_FB_FactData_Detail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iYear","name":"iYear"},{"path":null,"name_without_path":"cBgItemCode","name":"cBgItemCode"},{"path":null,"name_without_path":"cDepCode","name":"cDepCode"},{"path":null,"name_without_path":"cItemClass","name":"cItemClass"},{"path":null,"name_without_path":"cItemCode","name":"cItemCode"},{"path":null,"name_without_path":"cPeriodCode","name":"cPeriodCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};