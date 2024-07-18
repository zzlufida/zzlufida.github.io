window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4005","name":"BG_CtrlRulesCaliberGroup_Detail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlRulesCaliberGroup_Detail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39561","object_id":"column-39561","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4006","name":"BG_CtrlRulesCaliberGroup_Master","name_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Master"}]},{"id":"column-39562","object_id":"column-39562","name":"cCaliberCode1","name_without_path":"cCaliberCode1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39563","object_id":"column-39563","name":"cCaliberCode2","name_without_path":"cCaliberCode2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39564","object_id":"column-39564","name":"cCaliberCode3","name_without_path":"cCaliberCode3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39565","object_id":"column-39565","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39566","object_id":"column-39566","name":"cCaliberCode4","name_without_path":"cCaliberCode4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39567","object_id":"column-39567","name":"cCaliberCode5","name_without_path":"cCaliberCode5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39568","object_id":"column-39568","name":"cCaliberCode6","name_without_path":"cCaliberCode6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39569","object_id":"column-39569","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4006","name":"BG_CtrlRulesCaliberGroup_Master","name_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Master"}]}],"relations":[{"name":"FK_BG_CtrlRulesCaliberGroup_Detail_BG_CtrlRulesCaliberGroup_Master","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlRulesCaliberGroup_Detail","foreign_table_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Detail","foreign_table_verbose":"BG_CtrlRulesCaliberGroup_Detail","foreign_table_verbose_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Detail","foreign_table_object_id":"t4005","primary_table":"BG_CtrlRulesCaliberGroup_Master","primary_table_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Master","primary_table_verbose":"BG_CtrlRulesCaliberGroup_Master","primary_table_verbose_show_schema":"dbo.BG_CtrlRulesCaliberGroup_Master","primary_table_object_id":"t4006","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCode","foreign_column_path":null,"foreign_column":"cCode"},{"primary_column_path":null,"primary_column":"iMakeYear","foreign_column_path":null,"foreign_column":"iMakeYear"}],"custom_fields":{}}],"unique_keys":[{"name":"IX_BG_CtrlRulesCaliberGroup_Detail_1","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cCode","name":"cCode"},{"path":null,"name_without_path":"cCaliberCode1","name":"cCaliberCode1"},{"path":null,"name_without_path":"cCaliberCode2","name":"cCaliberCode2"},{"path":null,"name_without_path":"cCaliberCode3","name":"cCaliberCode3"},{"path":null,"name_without_path":"cCaliberCode4","name":"cCaliberCode4"},{"path":null,"name_without_path":"cCaliberCode5","name":"cCaliberCode5"},{"path":null,"name_without_path":"cCaliberCode6","name":"cCaliberCode6"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};