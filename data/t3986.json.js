window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3986","name":"BG_CodeRule_Res","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CodeRule_Res"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39373","object_id":"column-39373","name":"cObjectKey","name_without_path":"cObjectKey","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39374","object_id":"column-39374","name":"cLocalID","name_without_path":"cLocalID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4077","name":"BG_Language","name_show_schema":"dbo.BG_Language"}]},{"id":"column-39375","object_id":"column-39375","name":"cName","name_without_path":"cName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_CodeRule_Res_BG_Language","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CodeRule_Res","foreign_table_show_schema":"dbo.BG_CodeRule_Res","foreign_table_verbose":"BG_CodeRule_Res","foreign_table_verbose_show_schema":"dbo.BG_CodeRule_Res","foreign_table_object_id":"t3986","primary_table":"BG_Language","primary_table_show_schema":"dbo.BG_Language","primary_table_verbose":"BG_Language","primary_table_verbose_show_schema":"dbo.BG_Language","primary_table_object_id":"t4077","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cLangID","foreign_column_path":null,"foreign_column":"cLocalID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CodeRule_Res","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cObjectKey","name":"cObjectKey"},{"path":null,"name_without_path":"cLocalID","name":"cLocalID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};