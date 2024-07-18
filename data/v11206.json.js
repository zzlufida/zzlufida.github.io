window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11206","name":"HR_PF_GoalChangeChild_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_GoalChangeChild_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_GoalChangeChild.uGoalChangeChildPK,\r\n       dbo.HR_PF_GoalChangeChild.cGoalChangeCode,\r\n       dbo.HR_PF_GoalChangeChild.cTableCode,\r\n       dbo.HR_PF_GoalChangeChild.iSerialNumber,\r\n       dbo.HR_PF_GoalChangeChild.cTargetCode,\r\n       HR_PF_Target.cTargetName as cTargetName,\r\n       dbo.HR_PF_GoalChangeChild.cColumnCode,\r\n       HR_PF_Column.cColumnName as cColumnName,\r\n       dbo.HR_PF_GoalChangeChild.sCheckMainbody,\r\n       HR_PF_EnumsCheckMainbody_view.cEnumName as sCheckMainbodyName,\r\n       dbo.HR_PF_GoalChangeChild.cDepCode,\r\n       Department.cDepName as cDepName,\r\n       dbo.HR_PF_GoalChangeChild.cPsn_Num,\r\n       hr_hi_person.cPsn_Name as cPsn_Name,\r\n       dbo.HR_PF_GoalChangeChild.cPeriodValue,\r\n\tHR_PF_Period.cPeriodName,\r\n       dbo.HR_PF_GoalChangeChild.cFormervalueText,\r\n       dbo.HR_PF_GoalChangeChild.fFormervalueNumber,\r\n       dbo.HR_PF_GoalChangeChild.iFormervalueAnnex,\r\n       dbo.HR_PF_GoalChangeChild.cNewvalueText,\r\n       dbo.HR_PF_GoalChangeChild.fNewvalueNumber,\r\n       dbo.HR_PF_GoalChangeChild.iNewvalueAnnex,\r\n       dbo.HR_PF_GoalChangeChild.tStamp,\r\n       dbo.HR_PF_GoalChangeChild.cDefine1,\r\n       dbo.HR_PF_GoalChangeChild.cDefine2,\r\n       dbo.HR_PF_GoalChangeChild.cDefine3,\r\n       dbo.HR_PF_GoalChangeChild.cStatus\r\nFROM dbo.HR_PF_GoalChangeChild with(nolock)  \r\nINNER JOIN\r\n       dbo.HR_PF_Target with(nolock)  ON \r\n       dbo.HR_PF_GoalChangeChild.cTargetCode = HR_PF_Target.cTargetCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_Column with(nolock)  ON \r\n       dbo.HR_PF_GoalChangeChild.cColumnCode = HR_PF_Column.cColumnCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_EnumsCheckMainbody_view ON \r\n       dbo.HR_PF_GoalChangeChild.sCheckMainbody = HR_PF_EnumsCheckMainbody_view.cEnumID\r\n \r\nINNER JOIN\r\n       dbo.Department with(nolock)  ON \r\n       dbo.HR_PF_GoalChangeChild.cDepCode = Department.cDepCode\r\n \r\nINNER JOIN\r\n       dbo.hr_hi_person with(nolock)  ON \r\n       dbo.HR_PF_GoalChangeChild.cPsn_Num = hr_hi_person.cPsn_Num\r\nInner join\r\n\tHR_PF_Period with(nolock)  ON\r\n        HR_PF_GoalChangeChild.cPeriodValue=HR_PF_Period.cPeriodValue","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_GoalChangeChild_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223181","object_id":"column-223181","name":"uGoalChangeChildPK","name_without_path":"uGoalChangeChildPK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223182","object_id":"column-223182","name":"cGoalChangeCode","name_without_path":"cGoalChangeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223183","object_id":"column-223183","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223184","object_id":"column-223184","name":"iSerialNumber","name_without_path":"iSerialNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223185","object_id":"column-223185","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223186","object_id":"column-223186","name":"cTargetName","name_without_path":"cTargetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223187","object_id":"column-223187","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223188","object_id":"column-223188","name":"cColumnName","name_without_path":"cColumnName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223189","object_id":"column-223189","name":"sCheckMainbody","name_without_path":"sCheckMainbody","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223190","object_id":"column-223190","name":"sCheckMainbodyName","name_without_path":"sCheckMainbodyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223191","object_id":"column-223191","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223192","object_id":"column-223192","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223193","object_id":"column-223193","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223194","object_id":"column-223194","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223195","object_id":"column-223195","name":"cPeriodValue","name_without_path":"cPeriodValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223196","object_id":"column-223196","name":"cPeriodName","name_without_path":"cPeriodName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223197","object_id":"column-223197","name":"cFormervalueText","name_without_path":"cFormervalueText","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223198","object_id":"column-223198","name":"fFormervalueNumber","name_without_path":"fFormervalueNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223199","object_id":"column-223199","name":"iFormervalueAnnex","name_without_path":"iFormervalueAnnex","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223200","object_id":"column-223200","name":"cNewvalueText","name_without_path":"cNewvalueText","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223201","object_id":"column-223201","name":"fNewvalueNumber","name_without_path":"fNewvalueNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223202","object_id":"column-223202","name":"iNewvalueAnnex","name_without_path":"iNewvalueAnnex","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223203","object_id":"column-223203","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223204","object_id":"column-223204","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223205","object_id":"column-223205","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223206","object_id":"column-223206","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223207","object_id":"column-223207","name":"cStatus","name_without_path":"cStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};