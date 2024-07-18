window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11227","name":"HR_PF_ResultChangeTarget_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_ResultChangeTarget_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_ResultChangeTarget.cResultChangeTargetCode,\r\n       dbo.HR_PF_ResultChangeTarget.cTableCode,\r\n       dbo.HR_PF_ResultChangeTarget.cSummary,\r\n       dbo.HR_PF_ResultChangeTarget.cMakeFormPerson,\r\n       hr_hi_person_cmakeformperson.cPsn_Name as cMakeFormPersonName,\r\n       dbo.HR_PF_ResultChangeTarget.dMakeFormDate,\r\n       dbo.HR_PF_ResultChangeTarget.cCheckPerson,\r\n       hr_hi_person_ccheckperson.cPsn_Name as cCheckPersonName,\r\n       dbo.HR_PF_ResultChangeTarget.cCheckIdea,\r\n       dbo.HR_PF_ResultChangeTarget.dCheckDate,\r\n       dbo.HR_PF_ResultChangeTarget.tStamp,\r\n       dbo.HR_PF_ResultChangeTarget.cDefine1,\r\n       dbo.HR_PF_ResultChangeTarget.cDefine2,\r\n       dbo.HR_PF_ResultChangeTarget.cDefine3\r\nFROM dbo.HR_PF_ResultChangeTarget  with(nolock)\r\nINNER JOIN\r\n       dbo.hr_hi_person  as hr_hi_person_cmakeformperson with(nolock) ON \r\n       dbo.HR_PF_ResultChangeTarget.cMakeFormPerson = hr_hi_person_cmakeformperson.cPsn_Num\r\n \r\nLEFT OUTER JOIN\r\n       dbo.hr_hi_person as hr_hi_person_ccheckperson with(nolock) ON \r\n       dbo.HR_PF_ResultChangeTarget.cCheckPerson = hr_hi_person_ccheckperson.cPsn_Num","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_ResultChangeTarget_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223564","object_id":"column-223564","name":"cResultChangeTargetCode","name_without_path":"cResultChangeTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223565","object_id":"column-223565","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223566","object_id":"column-223566","name":"cSummary","name_without_path":"cSummary","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223567","object_id":"column-223567","name":"cMakeFormPerson","name_without_path":"cMakeFormPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223568","object_id":"column-223568","name":"cMakeFormPersonName","name_without_path":"cMakeFormPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223569","object_id":"column-223569","name":"dMakeFormDate","name_without_path":"dMakeFormDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223570","object_id":"column-223570","name":"cCheckPerson","name_without_path":"cCheckPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223571","object_id":"column-223571","name":"cCheckPersonName","name_without_path":"cCheckPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223572","object_id":"column-223572","name":"cCheckIdea","name_without_path":"cCheckIdea","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223573","object_id":"column-223573","name":"dCheckDate","name_without_path":"dCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223574","object_id":"column-223574","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223575","object_id":"column-223575","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223576","object_id":"column-223576","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223577","object_id":"column-223577","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};