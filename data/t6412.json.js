window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6412","name":"HR_PF_WorkFlowEngine","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_WorkFlowEngine"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-78315","object_id":"column-78315","name":"uWorkFlowEnginePK","name_without_path":"uWorkFlowEnginePK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78316","object_id":"column-78316","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78317","object_id":"column-78317","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6393","name":"HR_PF_Table","name_show_schema":"dbo.HR_PF_Table"}]},{"id":"column-78318","object_id":"column-78318","name":"iStepSerialnumber","name_without_path":"iStepSerialnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78319","object_id":"column-78319","name":"sWorkStep","name_without_path":"sWorkStep","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78320","object_id":"column-78320","name":"cActivityName","name_without_path":"cActivityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78321","object_id":"column-78321","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78322","object_id":"column-78322","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6181","name":"hr_hi_person","name_show_schema":"dbo.hr_hi_person"}]},{"id":"column-78323","object_id":"column-78323","name":"cDisposePerson","name_without_path":"cDisposePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78324","object_id":"column-78324","name":"cDisposeTime","name_without_path":"cDisposeTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78325","object_id":"column-78325","name":"sState","name_without_path":"sState","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78326","object_id":"column-78326","name":"cCheckIdea","name_without_path":"cCheckIdea","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78327","object_id":"column-78327","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78328","object_id":"column-78328","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78329","object_id":"column-78329","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78330","object_id":"column-78330","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"hr_hi_person_HR_PF_WorkFlowEngine_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_WorkFlowEngine","foreign_table_show_schema":"dbo.HR_PF_WorkFlowEngine","foreign_table_verbose":"HR_PF_WorkFlowEngine","foreign_table_verbose_show_schema":"dbo.HR_PF_WorkFlowEngine","foreign_table_object_id":"t6412","primary_table":"hr_hi_person","primary_table_show_schema":"dbo.hr_hi_person","primary_table_verbose":"hr_hi_person","primary_table_verbose_show_schema":"dbo.hr_hi_person","primary_table_object_id":"t6181","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPsn_Num","foreign_column_path":null,"foreign_column":"cPsn_Num"}],"custom_fields":{}},{"name":"HR_PF_Table_HR_PF_WorkFlowEngine_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_WorkFlowEngine","foreign_table_show_schema":"dbo.HR_PF_WorkFlowEngine","foreign_table_verbose":"HR_PF_WorkFlowEngine","foreign_table_verbose_show_schema":"dbo.HR_PF_WorkFlowEngine","foreign_table_object_id":"t6412","primary_table":"HR_PF_Table","primary_table_show_schema":"dbo.HR_PF_Table","primary_table_verbose":"HR_PF_Table","primary_table_verbose_show_schema":"dbo.HR_PF_Table","primary_table_object_id":"t6393","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTableCode","foreign_column_path":null,"foreign_column":"cTableCode"}],"custom_fields":{}}],"unique_keys":[{"name":"评价流程引擎_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uWorkFlowEnginePK","name":"uWorkFlowEnginePK"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};