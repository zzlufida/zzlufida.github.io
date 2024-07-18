window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6338","name":"HR_PF_GoalChange","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_GoalChange"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77358","object_id":"column-77358","name":"cGoalChangeCode","name_without_path":"cGoalChangeCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77359","object_id":"column-77359","name":"cSummary","name_without_path":"cSummary","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77360","object_id":"column-77360","name":"cMakeFormPerson","name_without_path":"cMakeFormPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77361","object_id":"column-77361","name":"dMakeFormDate","name_without_path":"dMakeFormDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77362","object_id":"column-77362","name":"cCheckPerson","name_without_path":"cCheckPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77363","object_id":"column-77363","name":"cCheckIdea","name_without_path":"cCheckIdea","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77364","object_id":"column-77364","name":"dCheckDate","name_without_path":"dCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77365","object_id":"column-77365","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77366","object_id":"column-77366","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77367","object_id":"column-77367","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77368","object_id":"column-77368","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77369","object_id":"column-77369","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6365","name":"HR_PF_Plan","name_show_schema":"dbo.HR_PF_Plan"}]},{"id":"column-77370","object_id":"column-77370","name":"bControl","name_without_path":"bControl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77371","object_id":"column-77371","name":"cVoucherType","name_without_path":"cVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77372","object_id":"column-77372","name":"cVoucherCode","name_without_path":"cVoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77373","object_id":"column-77373","name":"cStatus","name_without_path":"cStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77374","object_id":"column-77374","name":"sVoucherState","name_without_path":"sVoucherState","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77375","object_id":"column-77375","name":"sCheckMainbody","name_without_path":"sCheckMainbody","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77376","object_id":"column-77376","name":"cSubmitPerson","name_without_path":"cSubmitPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77377","object_id":"column-77377","name":"dSubmitTime","name_without_path":"dSubmitTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_Plan_HR_PF_GoalChange_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_GoalChange","foreign_table_show_schema":"dbo.HR_PF_GoalChange","foreign_table_verbose":"HR_PF_GoalChange","foreign_table_verbose_show_schema":"dbo.HR_PF_GoalChange","foreign_table_object_id":"t6338","primary_table":"HR_PF_Plan","primary_table_show_schema":"dbo.HR_PF_Plan","primary_table_verbose":"HR_PF_Plan","primary_table_verbose_show_schema":"dbo.HR_PF_Plan","primary_table_object_id":"t6365","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPlanCode","foreign_column_path":null,"foreign_column":"cPlanCode"}],"custom_fields":{}},{"name":"HR_PF_GoalChange_HR_PF_GoalChangeChild_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_GoalChangeChild","foreign_table_show_schema":"dbo.HR_PF_GoalChangeChild","foreign_table_verbose":"HR_PF_GoalChangeChild","foreign_table_verbose_show_schema":"dbo.HR_PF_GoalChangeChild","foreign_table_object_id":"t6339","primary_table":"HR_PF_GoalChange","primary_table_show_schema":"dbo.HR_PF_GoalChange","primary_table_verbose":"HR_PF_GoalChange","primary_table_verbose_show_schema":"dbo.HR_PF_GoalChange","primary_table_object_id":"t6338","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGoalChangeCode","foreign_column_path":null,"foreign_column":"cGoalChangeCode"}],"custom_fields":{}}],"unique_keys":[{"name":"目标变更单主表_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cGoalChangeCode","name":"cGoalChangeCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};