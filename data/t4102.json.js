window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4102","name":"BG_Target_Res","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_Target_Res"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40822","object_id":"column-40822","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40825","object_id":"column-40825","name":"cLangID","name_without_path":"cLangID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4077","name":"BG_Language","name_show_schema":"dbo.BG_Language"}]},{"id":"column-40823","object_id":"column-40823","name":"cTargetName","name_without_path":"cTargetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40824","object_id":"column-40824","name":"cTargetAlias","name_without_path":"cTargetAlias","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40826","object_id":"column-40826","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_Target_Res_BG_Language","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_Target_Res","foreign_table_show_schema":"dbo.BG_Target_Res","foreign_table_verbose":"BG_Target_Res","foreign_table_verbose_show_schema":"dbo.BG_Target_Res","foreign_table_object_id":"t4102","primary_table":"BG_Language","primary_table_show_schema":"dbo.BG_Language","primary_table_verbose":"BG_Language","primary_table_verbose_show_schema":"dbo.BG_Language","primary_table_object_id":"t4077","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cLangID","foreign_column_path":null,"foreign_column":"cLangID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_Target_Res","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cTargetCode","name":"cTargetCode"},{"path":null,"name_without_path":"cLangID","name":"cLangID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};