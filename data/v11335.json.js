window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11335","name":"hr_v_omLeaveApp_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[hr_v_omLeaveApp_show]\r\nAS \r\n    SELECT  v.bInFlow ,\r\n            v.cAuditBy ,\r\n            v.cbSysBarCode ,\r\n            v.cContact ,\r\n            v.cCreateBy ,\r\n            v.cCurrentAuditor ,\r\n            v.cDepCode ,\r\n            v.cDepName ,\r\n            v.cExamineApproveType ,\r\n            v.cInterviewNote1 ,\r\n            v.cInterviewNote2 ,\r\n            v.cInterviewNote3 ,\r\n            v.cJobcode ,\r\n            v.cJobName ,\r\n            v.cLeaveRegisterForm ,\r\n            v.cModifyBy ,\r\n            v.cPsn_Num ,\r\n            v.cSubmitBy ,\r\n            v.cSysBarCode ,\r\n            v.cVoucherCode ,\r\n            v.cVoucherId ,\r\n            v.cVoucherType ,\r\n            v.dAppLeaveDate ,\r\n            v.dAuditOn ,\r\n            v.dCreateOn ,\r\n            v.dEnterDate ,\r\n            v.dInterviewDate1 ,\r\n            v.dInterviewDate2 ,\r\n            v.dInterviewDate3 ,\r\n            v.dLeaveDate ,\r\n            v.dModifyOn ,\r\n            v.dSubmitOn ,\r\n            v.iRecordID ,\r\n            v.JobNumber ,\r\n            v.PK_HR_OM_LeaveApply ,\r\n            v.PK_HR_OM_LeaveApplyDetail ,\r\n            v.rSex ,\r\n            v.vRemark ,\r\n            v.Vt_ID ,\r\n            t1.Vdutyname AS cDutyCode ,\r\n            t2.cDepName AS cInterviewDept1 ,\r\n            t3.cDepName AS cInterviewDept2 ,\r\n            t4.cDepName AS cInterviewDept3 ,\r\n            t5.cpsn_name AS cInterviewPerson1 ,\r\n            t6.cpsn_name AS cInterviewPerson2 ,\r\n            t7.cpsn_name AS cInterviewPerson3 ,\r\n            t8.cpsn_name AS cPsn_Name ,\r\n            t9.vdescription AS cStatus ,\r\n            t10.vdescription AS rChgPersonType ,\r\n            t11.vdescription AS rEducation ,\r\n            t12.vdescription AS rPersonType ,\r\n            t13.vdescription AS vLeaveClass ,\r\n            t14.vDescription AS vLeaveReason ,\r\n            t15.vDescription AS vApplyType ,\r\n            psn.cPsn_NameEN\r\n    FROM    hr_v_omLeaveApp v\r\n            LEFT OUTER JOIN hr_hi_person psn ON v.cPsn_Num = psn.cPsn_Num\r\n            LEFT OUTER JOIN hr_om_Duty AS t1 ON v.cDutyCode = t1.Cdutycode\r\n            LEFT OUTER JOIN department AS t2 ON v.cInterviewDept1 = t2.CDepCode\r\n            LEFT OUTER JOIN department AS t3 ON v.cInterviewDept2 = t3.CDepCode\r\n            LEFT OUTER JOIN department AS t4 ON v.cInterviewDept3 = t4.CDepCode\r\n            LEFT OUTER JOIN hr_hi_person AS t5 ON v.cInterviewPerson1 = t5.cpsn_num\r\n            LEFT OUTER JOIN hr_hi_person AS t6 ON v.cInterviewPerson2 = t6.cpsn_num\r\n            LEFT OUTER JOIN hr_hi_person AS t7 ON v.cInterviewPerson3 = t7.cpsn_num\r\n            LEFT OUTER JOIN hr_hi_person AS t8 ON v.cPsn_Name = t8.cpsn_num\r\n            LEFT OUTER JOIN hr_ct099 AS t9 ON v.cStatus = t9.ccodeid\r\n            LEFT OUTER JOIN hr_ct000 AS t10 ON v.rChgPersonType = t10.ccodeid\r\n            LEFT OUTER JOIN HR_CT002 AS t11 ON v.rEducation = t11.ccodeid\r\n            LEFT OUTER JOIN hr_ct000 AS t12 ON v.rPersonType = t12.ccodeid\r\n            LEFT OUTER JOIN hr_ct418 AS t13 ON v.vLeaveClass = t13.ccodeid\r\n            LEFT OUTER JOIN hr_ct011 AS t14 ON v.vLeaveReason = t14.cCodeID\r\n            LEFT OUTER JOIN hr_ct420 AS t15 ON v.vApplyType=t15.cCodeID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_omLeaveApp_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-226767","object_id":"column-226767","name":"bInFlow","name_without_path":"bInFlow","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226768","object_id":"column-226768","name":"cAuditBy","name_without_path":"cAuditBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226769","object_id":"column-226769","name":"cbSysBarCode","name_without_path":"cbSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226770","object_id":"column-226770","name":"cContact","name_without_path":"cContact","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226771","object_id":"column-226771","name":"cCreateBy","name_without_path":"cCreateBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226772","object_id":"column-226772","name":"cCurrentAuditor","name_without_path":"cCurrentAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226773","object_id":"column-226773","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226774","object_id":"column-226774","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226775","object_id":"column-226775","name":"cExamineApproveType","name_without_path":"cExamineApproveType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226776","object_id":"column-226776","name":"cInterviewNote1","name_without_path":"cInterviewNote1","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226777","object_id":"column-226777","name":"cInterviewNote2","name_without_path":"cInterviewNote2","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226778","object_id":"column-226778","name":"cInterviewNote3","name_without_path":"cInterviewNote3","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226779","object_id":"column-226779","name":"cJobcode","name_without_path":"cJobcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226780","object_id":"column-226780","name":"cJobName","name_without_path":"cJobName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226781","object_id":"column-226781","name":"cLeaveRegisterForm","name_without_path":"cLeaveRegisterForm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226782","object_id":"column-226782","name":"cModifyBy","name_without_path":"cModifyBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226783","object_id":"column-226783","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226784","object_id":"column-226784","name":"cSubmitBy","name_without_path":"cSubmitBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226785","object_id":"column-226785","name":"cSysBarCode","name_without_path":"cSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226786","object_id":"column-226786","name":"cVoucherCode","name_without_path":"cVoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226787","object_id":"column-226787","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226788","object_id":"column-226788","name":"cVoucherType","name_without_path":"cVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226789","object_id":"column-226789","name":"dAppLeaveDate","name_without_path":"dAppLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226790","object_id":"column-226790","name":"dAuditOn","name_without_path":"dAuditOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226791","object_id":"column-226791","name":"dCreateOn","name_without_path":"dCreateOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226792","object_id":"column-226792","name":"dEnterDate","name_without_path":"dEnterDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226793","object_id":"column-226793","name":"dInterviewDate1","name_without_path":"dInterviewDate1","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226794","object_id":"column-226794","name":"dInterviewDate2","name_without_path":"dInterviewDate2","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226795","object_id":"column-226795","name":"dInterviewDate3","name_without_path":"dInterviewDate3","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226796","object_id":"column-226796","name":"dLeaveDate","name_without_path":"dLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226797","object_id":"column-226797","name":"dModifyOn","name_without_path":"dModifyOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226798","object_id":"column-226798","name":"dSubmitOn","name_without_path":"dSubmitOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226799","object_id":"column-226799","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226800","object_id":"column-226800","name":"JobNumber","name_without_path":"JobNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226801","object_id":"column-226801","name":"PK_HR_OM_LeaveApply","name_without_path":"PK_HR_OM_LeaveApply","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226802","object_id":"column-226802","name":"PK_HR_OM_LeaveApplyDetail","name_without_path":"PK_HR_OM_LeaveApplyDetail","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226803","object_id":"column-226803","name":"rSex","name_without_path":"rSex","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226804","object_id":"column-226804","name":"vRemark","name_without_path":"vRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226805","object_id":"column-226805","name":"Vt_ID","name_without_path":"Vt_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226806","object_id":"column-226806","name":"cDutyCode","name_without_path":"cDutyCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226807","object_id":"column-226807","name":"cInterviewDept1","name_without_path":"cInterviewDept1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226808","object_id":"column-226808","name":"cInterviewDept2","name_without_path":"cInterviewDept2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226809","object_id":"column-226809","name":"cInterviewDept3","name_without_path":"cInterviewDept3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226810","object_id":"column-226810","name":"cInterviewPerson1","name_without_path":"cInterviewPerson1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226811","object_id":"column-226811","name":"cInterviewPerson2","name_without_path":"cInterviewPerson2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226812","object_id":"column-226812","name":"cInterviewPerson3","name_without_path":"cInterviewPerson3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226813","object_id":"column-226813","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226814","object_id":"column-226814","name":"cStatus","name_without_path":"cStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226815","object_id":"column-226815","name":"rChgPersonType","name_without_path":"rChgPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226816","object_id":"column-226816","name":"rEducation","name_without_path":"rEducation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226817","object_id":"column-226817","name":"rPersonType","name_without_path":"rPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226818","object_id":"column-226818","name":"vLeaveClass","name_without_path":"vLeaveClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226819","object_id":"column-226819","name":"vLeaveReason","name_without_path":"vLeaveReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226820","object_id":"column-226820","name":"vApplyType","name_without_path":"vApplyType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-226821","object_id":"column-226821","name":"cPsn_NameEN","name_without_path":"cPsn_NameEN","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};