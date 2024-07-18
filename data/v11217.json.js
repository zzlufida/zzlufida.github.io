window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11217","name":"HR_PF_PerformanceResult_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_PerformanceResult_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_PerformanceResult.uPerformanceResultPK,\r\n       dbo.HR_PF_PerformanceResult.cColumnCode,\r\n       HR_PF_Column.cColumnName as cColumnName,\r\n       dbo.HR_PF_PerformanceResult.sCheckMainbody,\r\n       HR_PF_EnumsCheckMainbody_view.cEnumName as sCheckMainbodyName,\r\n       dbo.HR_PF_PerformanceResult.cDepCode,\r\n       Department.cDepName as cDepName,\r\n       dbo.HR_PF_PerformanceResult.cDepWeight,\r\n       dbo.HR_PF_PerformanceResult.cPsn_Num,\r\n       hr_hi_person.cPsn_Name as cPsn_Name,\r\n       dbo.HR_PF_PerformanceResult.cPeriodValue,\r\n       dbo.HR_PF_PerformanceResult.fNumericalValue,\r\n       dbo.HR_PF_PerformanceResult.cText,\r\n       dbo.HR_PF_PerformanceResult.iAnnex,\r\n       dbo.HR_PF_PerformanceResult.tStamp,\r\n       dbo.HR_PF_PerformanceResult.cDefine1,\r\n       dbo.HR_PF_PerformanceResult.cDefine2,\r\n       dbo.HR_PF_PerformanceResult.cDefine3,\r\n       dbo.HR_PF_PerformanceResult.cTableCode,\r\n       dbo.HR_PF_PerformanceResult.cPlanCode,\r\n       dbo.HR_PF_PerformanceResult.cSchemaCode,\r\n\t\thr_pf_Period.cPeriodName\r\nFROM dbo.HR_PF_PerformanceResult with(nolock)  \r\nINNER JOIN\r\n       dbo.HR_PF_Column with(nolock)  ON \r\n       dbo.HR_PF_PerformanceResult.cColumnCode = HR_PF_Column.cColumnCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_EnumsCheckMainbody_view ON \r\n       dbo.HR_PF_PerformanceResult.sCheckMainbody = HR_PF_EnumsCheckMainbody_view.cEnumID\r\n \r\nINNER JOIN\r\n       dbo.Department with(nolock)  ON \r\n       dbo.HR_PF_PerformanceResult.cDepCode = Department.cDepCode\r\n \r\nINNER JOIN\r\n       dbo.hr_hi_person with(nolock)  ON \r\n       dbo.HR_PF_PerformanceResult.cPsn_Num = hr_hi_person.cPsn_Num\r\nleft join \r\n\t\thr_pf_period with(nolock)  on\r\n        dbo.HR_PF_PerformanceResult.cPeriodValue = hr_pf_period.cPeriodValue","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_PerformanceResult_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223383","object_id":"column-223383","name":"uPerformanceResultPK","name_without_path":"uPerformanceResultPK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223384","object_id":"column-223384","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223385","object_id":"column-223385","name":"cColumnName","name_without_path":"cColumnName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223386","object_id":"column-223386","name":"sCheckMainbody","name_without_path":"sCheckMainbody","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223387","object_id":"column-223387","name":"sCheckMainbodyName","name_without_path":"sCheckMainbodyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223388","object_id":"column-223388","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223389","object_id":"column-223389","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223390","object_id":"column-223390","name":"cDepWeight","name_without_path":"cDepWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223391","object_id":"column-223391","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223392","object_id":"column-223392","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223393","object_id":"column-223393","name":"cPeriodValue","name_without_path":"cPeriodValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223394","object_id":"column-223394","name":"fNumericalValue","name_without_path":"fNumericalValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223395","object_id":"column-223395","name":"cText","name_without_path":"cText","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223396","object_id":"column-223396","name":"iAnnex","name_without_path":"iAnnex","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223397","object_id":"column-223397","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223398","object_id":"column-223398","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223399","object_id":"column-223399","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223400","object_id":"column-223400","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223401","object_id":"column-223401","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223402","object_id":"column-223402","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223403","object_id":"column-223403","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223404","object_id":"column-223404","name":"cPeriodName","name_without_path":"cPeriodName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};