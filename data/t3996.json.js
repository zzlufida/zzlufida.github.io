window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3996","name":"BG_CtrlBaseSubject","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlBaseSubject"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39461","object_id":"column-39461","name":"cID","name_without_path":"cID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39462","object_id":"column-39462","name":"cSubjectCode","name_without_path":"cSubjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39463","object_id":"column-39463","name":"cSubjectName","name_without_path":"cSubjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39464","object_id":"column-39464","name":"cAccountID","name_without_path":"cAccountID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39465","object_id":"column-39465","name":"cSchemeCode","name_without_path":"cSchemeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3995","name":"BG_CtrlBaseScheme","name_show_schema":"dbo.BG_CtrlBaseScheme"}]},{"id":"column-39466","object_id":"column-39466","name":"bDebit","name_without_path":"bDebit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39467","object_id":"column-39467","name":"bAdd","name_without_path":"bAdd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39468","object_id":"column-39468","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"BG_CtrlBaseScheme_BG_CtrlBaseSubject_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlBaseSubject","foreign_table_show_schema":"dbo.BG_CtrlBaseSubject","foreign_table_verbose":"BG_CtrlBaseSubject","foreign_table_verbose_show_schema":"dbo.BG_CtrlBaseSubject","foreign_table_object_id":"t3996","primary_table":"BG_CtrlBaseScheme","primary_table_show_schema":"dbo.BG_CtrlBaseScheme","primary_table_verbose":"BG_CtrlBaseScheme","primary_table_verbose_show_schema":"dbo.BG_CtrlBaseScheme","primary_table_object_id":"t3995","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSchemeCode","foreign_column_path":null,"foreign_column":"cSchemeCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CtrlBaseSubject","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cID","name":"cID"}],"custom_fields":{}},{"name":"index_BG_CtrlBaseSubject_cSubjectCode_cAccountID_cSchemeCode_bDebit","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cSubjectCode","name":"cSubjectCode"},{"path":null,"name_without_path":"cAccountID","name":"cAccountID"},{"path":null,"name_without_path":"cSchemeCode","name":"cSchemeCode"},{"path":null,"name_without_path":"bDebit","name":"bDebit"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};