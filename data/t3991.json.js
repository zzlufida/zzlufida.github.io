window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3991","name":"BG_CtrlAccount_Detail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlAccount_Detail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39406","object_id":"column-39406","name":"cAccountID","name_without_path":"cAccountID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3990","name":"BG_CtrlAccount","name_show_schema":"dbo.BG_CtrlAccount"}]},{"id":"column-39409","object_id":"column-39409","name":"cSysId","name_without_path":"cSysId","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4002","name":"BG_CtrlObject","name_show_schema":"dbo.BG_CtrlObject"}]},{"id":"column-39407","object_id":"column-39407","name":"bIsStart","name_without_path":"bIsStart","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39408","object_id":"column-39408","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_CtrlAccount_Detail_BG_CtrlAccount","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlAccount_Detail","foreign_table_show_schema":"dbo.BG_CtrlAccount_Detail","foreign_table_verbose":"BG_CtrlAccount_Detail","foreign_table_verbose_show_schema":"dbo.BG_CtrlAccount_Detail","foreign_table_object_id":"t3991","primary_table":"BG_CtrlAccount","primary_table_show_schema":"dbo.BG_CtrlAccount","primary_table_verbose":"BG_CtrlAccount","primary_table_verbose_show_schema":"dbo.BG_CtrlAccount","primary_table_object_id":"t3990","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cAccountID","foreign_column_path":null,"foreign_column":"cAccountID"}],"custom_fields":{}},{"name":"FK_BG_CtrlAccount_Detail_BG_CtrlObject","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlAccount_Detail","foreign_table_show_schema":"dbo.BG_CtrlAccount_Detail","foreign_table_verbose":"BG_CtrlAccount_Detail","foreign_table_verbose_show_schema":"dbo.BG_CtrlAccount_Detail","foreign_table_object_id":"t3991","primary_table":"BG_CtrlObject","primary_table_show_schema":"dbo.BG_CtrlObject","primary_table_verbose":"BG_CtrlObject","primary_table_verbose_show_schema":"dbo.BG_CtrlObject","primary_table_object_id":"t4002","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSysId","foreign_column_path":null,"foreign_column":"cSysId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CtrlAccount_Detail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cAccountID","name":"cAccountID"},{"path":null,"name_without_path":"cSysId","name":"cSysId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};