window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3961","name":"BG_AlertUser","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_AlertUser"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39096","object_id":"column-39096","name":"cAlertID","name_without_path":"cAlertID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3959","name":"BG_Alert","name_show_schema":"dbo.BG_Alert"}]},{"id":"column-39098","object_id":"column-39098","name":"cUserCode","name_without_path":"cUserCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39097","object_id":"column-39097","name":"cAlertMode","name_without_path":"cAlertMode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_AlertUser_BG_Alert","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_AlertUser","foreign_table_show_schema":"dbo.BG_AlertUser","foreign_table_verbose":"BG_AlertUser","foreign_table_verbose_show_schema":"dbo.BG_AlertUser","foreign_table_object_id":"t3961","primary_table":"BG_Alert","primary_table_show_schema":"dbo.BG_Alert","primary_table_verbose":"BG_Alert","primary_table_verbose_show_schema":"dbo.BG_Alert","primary_table_object_id":"t3959","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cAlertID","foreign_column_path":null,"foreign_column":"cAlertID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_AlertUser","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cAlertID","name":"cAlertID"},{"path":null,"name_without_path":"cUserCode","name":"cUserCode"},{"path":null,"name_without_path":"cAlertMode","name":"cAlertMode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};