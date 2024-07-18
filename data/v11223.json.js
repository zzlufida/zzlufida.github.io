window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11223","name":"HR_PF_PlanWorkFlow_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_PlanWorkFlow_View\r\nAS\r\nSELECT dbo.HR_PF_PlanWorkFlow.uPlanWorkFlowPK, \r\n      dbo.HR_PF_PlanWorkFlow.cPlanCode, dbo.HR_PF_Plan.cPlanName, \r\n      dbo.HR_PF_PlanWorkFlow.sWorkStep, \r\n      dbo.HR_PF_EnumsWorkStep_View.cEnumName AS sWorkStepName, \r\n      dbo.HR_PF_PlanWorkFlow.iStepSerialnumber, \r\n      dbo.HR_PF_PlanWorkFlow.cActivityName, dbo.HR_PF_PlanWorkFlow.bMailInform, \r\n      dbo.HR_PF_PlanWorkFlow.bNoteInform, dbo.HR_PF_PlanWorkFlow.bIsEdit, \r\n      dbo.HR_PF_PlanWorkFlow.dBeginTime, dbo.HR_PF_PlanWorkFlow.dEndTime, \r\n      dbo.HR_PF_PlanWorkFlow.cCodeID, dbo.HR_CT050.vdescription AS cJobListName, \r\n      dbo.HR_PF_PlanWorkFlow.sRelationToCheckperson, \r\n      dbo.HR_PF_EnumsRelationToCheckperson_View.cEnumName AS sRelationToCheckpersonName,\r\n       dbo.HR_PF_PlanWorkFlow.tStamp, dbo.HR_PF_PlanWorkFlow.cDefine1, \r\n      dbo.HR_PF_PlanWorkFlow.cDefine2, dbo.HR_PF_PlanWorkFlow.cDefine3\r\nFROM dbo.HR_PF_PlanWorkFlow with(nolock) INNER JOIN\r\n      dbo.HR_PF_Plan with(nolock) ON \r\n      dbo.HR_PF_PlanWorkFlow.cPlanCode = dbo.HR_PF_Plan.cPlanCode INNER JOIN\r\n      dbo.HR_PF_EnumsWorkStep_View ON \r\n      dbo.HR_PF_PlanWorkFlow.sWorkStep = dbo.HR_PF_EnumsWorkStep_View.cEnumID left\r\n       JOIN\r\n      dbo.HR_CT050 with(nolock) ON \r\n      dbo.HR_PF_PlanWorkFlow.cCodeID = dbo.HR_CT050.ccodeID LEFT OUTER JOIN\r\n      dbo.HR_PF_EnumsRelationToCheckperson_View ON \r\n      dbo.HR_PF_PlanWorkFlow.sRelationToCheckperson = dbo.HR_PF_EnumsRelationToCheckperson_View.cEnumID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_PlanWorkFlow_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223503","object_id":"column-223503","name":"uPlanWorkFlowPK","name_without_path":"uPlanWorkFlowPK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223484","object_id":"column-223484","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223485","object_id":"column-223485","name":"cPlanName","name_without_path":"cPlanName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223486","object_id":"column-223486","name":"sWorkStep","name_without_path":"sWorkStep","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223487","object_id":"column-223487","name":"sWorkStepName","name_without_path":"sWorkStepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223488","object_id":"column-223488","name":"iStepSerialnumber","name_without_path":"iStepSerialnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223489","object_id":"column-223489","name":"cActivityName","name_without_path":"cActivityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223490","object_id":"column-223490","name":"bMailInform","name_without_path":"bMailInform","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223491","object_id":"column-223491","name":"bNoteInform","name_without_path":"bNoteInform","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223492","object_id":"column-223492","name":"bIsEdit","name_without_path":"bIsEdit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223493","object_id":"column-223493","name":"dBeginTime","name_without_path":"dBeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223494","object_id":"column-223494","name":"dEndTime","name_without_path":"dEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223495","object_id":"column-223495","name":"cCodeID","name_without_path":"cCodeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223496","object_id":"column-223496","name":"cJobListName","name_without_path":"cJobListName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223497","object_id":"column-223497","name":"sRelationToCheckperson","name_without_path":"sRelationToCheckperson","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223498","object_id":"column-223498","name":"sRelationToCheckpersonName","name_without_path":"sRelationToCheckpersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223499","object_id":"column-223499","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223500","object_id":"column-223500","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223501","object_id":"column-223501","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223502","object_id":"column-223502","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};