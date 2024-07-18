window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9672","name":"WA_GZBItemDept","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WA_GZBItemDept"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-154942","object_id":"column-154942","name":"cGZGradeNum","name_without_path":"cGZGradeNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154943","object_id":"column-154943","name":"iGZBName_id","name_without_path":"iGZBName_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.WA_GZBItemDept_iGZBName_id_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154944","object_id":"column-154944","name":"cDept_Num","name_without_path":"cDept_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-154945","object_id":"column-154945","name":"cMachine","name_without_path":"cMachine","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154946","object_id":"column-154946","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154947","object_id":"column-154947","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__WA_GZBIte__cDept__41448AA6","title":null,"description":null,"is_user_defined":false,"foreign_table":"WA_GZBItemDept","foreign_table_show_schema":"dbo.WA_GZBItemDept","foreign_table_verbose":"WA_GZBItemDept","foreign_table_verbose_show_schema":"dbo.WA_GZBItemDept","foreign_table_object_id":"t9672","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cDept_Num"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_WA_GZBItemDept","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};