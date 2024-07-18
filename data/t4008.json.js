window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4008","name":"BG_CtrlRulesMaster","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlRulesMaster"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39595","object_id":"column-39595","name":"cID","name_without_path":"cID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39596","object_id":"column-39596","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39597","object_id":"column-39597","name":"cTargetGroup","name_without_path":"cTargetGroup","description":null,"is_pk":true,"is_identity":false,"data_type":"nchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39598","object_id":"column-39598","name":"iAverageFunction","name_without_path":"iAverageFunction","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39599","object_id":"column-39599","name":"cCaliberKey1","name_without_path":"cCaliberKey1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39600","object_id":"column-39600","name":"cCaliberKey2","name_without_path":"cCaliberKey2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39601","object_id":"column-39601","name":"cCaliberKey3","name_without_path":"cCaliberKey3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39602","object_id":"column-39602","name":"bStartCtrl","name_without_path":"bStartCtrl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39603","object_id":"column-39603","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39604","object_id":"column-39604","name":"cCtrlRuleName","name_without_path":"cCtrlRuleName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39605","object_id":"column-39605","name":"cCaliberKey4","name_without_path":"cCaliberKey4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39606","object_id":"column-39606","name":"cCaliberKey5","name_without_path":"cCaliberKey5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39607","object_id":"column-39607","name":"cCaliberKey6","name_without_path":"cCaliberKey6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39608","object_id":"column-39608","name":"iYear","name_without_path":"iYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39609","object_id":"column-39609","name":"bIsControlBySepData","name_without_path":"bIsControlBySepData","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_CtrlRulesDetail_BG_CtrlRulesMaster","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlRulesDetail","foreign_table_show_schema":"dbo.BG_CtrlRulesDetail","foreign_table_verbose":"BG_CtrlRulesDetail","foreign_table_verbose_show_schema":"dbo.BG_CtrlRulesDetail","foreign_table_object_id":"t4007","primary_table":"BG_CtrlRulesMaster","primary_table_show_schema":"dbo.BG_CtrlRulesMaster","primary_table_verbose":"BG_CtrlRulesMaster","primary_table_verbose_show_schema":"dbo.BG_CtrlRulesMaster","primary_table_object_id":"t4008","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cID","foreign_column_path":null,"foreign_column":"cID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CtrlRulesMaster","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cItemCode","name":"cItemCode"},{"path":null,"name_without_path":"cTargetGroup","name":"cTargetGroup"},{"path":null,"name_without_path":"iYear","name":"iYear"}],"custom_fields":{}},{"name":"IX_BG_CtrlRulesMaster","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cID","name":"cID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};