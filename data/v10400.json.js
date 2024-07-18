window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10400","name":"CRM_ACT_TITLE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"-- 表头\r\nCREATE VIEW DBO.CRM_ACT_TITLE\r\nAS\r\nSELECT a.OID ,a.VT_ID, a.ID as ID, [cActType], [cActCode],\r\n[cActSubject], [cActContent], [bcActPriority], [cActAddress],\r\n[cActMaker], [cActPerformer], [dPlanBeginDate], [dPlanBeginTime], \r\n[dPlanEndDate], [dPlanEndTime], [dFactBeginDate], [dFactBeginTime], \r\n[dFactEndDate], [dFactEndTime], [bcActStatus], [bIsAllday], \r\n[bCalendarShow], [bAlert], [cAlertOffset], a.cDefine1, \r\na.cDefine2, a.cDefine3, a.cDefine4, a.cDefine5, \r\na.cDefine6, a.cDefine7, a.cDefine8, a.cDefine9, \r\na.cDefine10,a.cDefine11,a.cDefine12,a.cDefine13, \r\na.cDefine14,a.cDefine15,a.cDefine16, a.cCreator, \r\na.dCreatDate, a.cRevisor, a.dModifyDate,a.ufts,\r\nb.cActTypeCode as cActTypeCode,b.cActTypeName as cActTypeName,\r\nc.cPersonCode as cActMakerCode,c.cPersonName as cActMakerName,\r\nd.cPersonCode as cActPerformerCode,d.cPersonName as cActPerformerName,\r\ncusdoc.cCusCode as cCustCode,cusdoc.cCusName as cCustName,\r\nopptdoc.cOppCode as cOpptCode,opptdoc.cOppName as cOpptName,\r\ncontact.cContactCode as cContactCode,contact.cContactName as cContactName,\r\nopptcourse.OID as cOpptSeqOID,status.cCode as cActStatusCode,status.cName as cActStatusName,\r\npriority.cCode as cActPriorityCode,priority.cName as cActPriorityName\r\nFROM [Crm_Activities] a\r\nleft join [crm_acttype] b on a.cActType = b.OID\r\nleft join [person] c on a.cActMaker = c.cPersonCode\r\nleft join [person] d on a.cActPerformer = d.cPersonCode\r\n\r\n/*\r\nleft join (select caom_ActiveOID,caom_ObjectOID  \r\n from crm_active_object_mapping where caom_ObjectType =N'P'\r\n)oppt on a.OID = oppt.caom_ActiveOID\r\nleft join Crm_Opportunity opptdoc on oppt.caom_ObjectOID = opptdoc.OID\r\nleft join (select caom_ActiveOID,caom_ObjectOID  \r\n from crm_active_object_mapping where caom_ObjectType =N'C'\r\n)cust on a.OID = cust.caom_ActiveOID and  cust.caom_ObjectOID = opptdoc.cCusCode \r\nleft join [customer] cusdoc on cust.caom_ObjectOID = cusdoc.cCusCode \r\nleft join (select caom_ActiveOID,caom_ObjectOID  \r\n from crm_active_object_mapping where caom_ObjectType =N'L'\r\n)linkman on a.OID = linkman.caom_ActiveOID \r\nleft join crm_contact contact on contact.OID = linkman.caom_ObjectOID \r\nand contact.cCusCode =  cusdoc.cCusCode \r\nleft join (select caom_ActiveOID,caom_ObjectOID  \r\n from crm_active_object_mapping where caom_ObjectType =N'S' \r\n)opptSeq on a.OID = opptSeq.caom_ActiveOID\r\nleft join Crm_OppCourse opptcourse on opptSeq.caom_ObjectOID = opptcourse.OID\r\n*/\r\n\r\n--\r\n    left join Crm_Opportunity opptdoc on a.OpptID = opptdoc.OID\r\n    left join [customer] cusdoc on a.cCusCode = cusdoc.cCusCode \r\n    left join crm_contact contact on a.ContactID =contact.cContactCode \r\n    left join Crm_OppCourse opptcourse on a.OpptCourseID = opptcourse.oid\r\n--\r\nleft join crm_basecode_act status on a.bcActStatus = status.ID\r\nleft join crm_basecode_act priority on a.bcActPriority = status.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_ACT_TITLE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-187892","object_id":"column-187892","name":"OID","name_without_path":"OID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187893","object_id":"column-187893","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187894","object_id":"column-187894","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187895","object_id":"column-187895","name":"cActType","name_without_path":"cActType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187896","object_id":"column-187896","name":"cActCode","name_without_path":"cActCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187897","object_id":"column-187897","name":"cActSubject","name_without_path":"cActSubject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187898","object_id":"column-187898","name":"cActContent","name_without_path":"cActContent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187899","object_id":"column-187899","name":"bcActPriority","name_without_path":"bcActPriority","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187900","object_id":"column-187900","name":"cActAddress","name_without_path":"cActAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187901","object_id":"column-187901","name":"cActMaker","name_without_path":"cActMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187902","object_id":"column-187902","name":"cActPerformer","name_without_path":"cActPerformer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187903","object_id":"column-187903","name":"dPlanBeginDate","name_without_path":"dPlanBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187904","object_id":"column-187904","name":"dPlanBeginTime","name_without_path":"dPlanBeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187905","object_id":"column-187905","name":"dPlanEndDate","name_without_path":"dPlanEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187906","object_id":"column-187906","name":"dPlanEndTime","name_without_path":"dPlanEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187907","object_id":"column-187907","name":"dFactBeginDate","name_without_path":"dFactBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187908","object_id":"column-187908","name":"dFactBeginTime","name_without_path":"dFactBeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187909","object_id":"column-187909","name":"dFactEndDate","name_without_path":"dFactEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187910","object_id":"column-187910","name":"dFactEndTime","name_without_path":"dFactEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187911","object_id":"column-187911","name":"bcActStatus","name_without_path":"bcActStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187912","object_id":"column-187912","name":"bIsAllday","name_without_path":"bIsAllday","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187913","object_id":"column-187913","name":"bCalendarShow","name_without_path":"bCalendarShow","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187914","object_id":"column-187914","name":"bAlert","name_without_path":"bAlert","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187915","object_id":"column-187915","name":"cAlertOffset","name_without_path":"cAlertOffset","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187916","object_id":"column-187916","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187917","object_id":"column-187917","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187918","object_id":"column-187918","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187919","object_id":"column-187919","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187920","object_id":"column-187920","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187921","object_id":"column-187921","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187922","object_id":"column-187922","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187923","object_id":"column-187923","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187924","object_id":"column-187924","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187925","object_id":"column-187925","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187926","object_id":"column-187926","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187927","object_id":"column-187927","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187928","object_id":"column-187928","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187929","object_id":"column-187929","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187930","object_id":"column-187930","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187931","object_id":"column-187931","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187932","object_id":"column-187932","name":"cCreator","name_without_path":"cCreator","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187933","object_id":"column-187933","name":"dCreatDate","name_without_path":"dCreatDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187934","object_id":"column-187934","name":"cRevisor","name_without_path":"cRevisor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187935","object_id":"column-187935","name":"dModifyDate","name_without_path":"dModifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187936","object_id":"column-187936","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187937","object_id":"column-187937","name":"cActTypeCode","name_without_path":"cActTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187938","object_id":"column-187938","name":"cActTypeName","name_without_path":"cActTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187939","object_id":"column-187939","name":"cActMakerCode","name_without_path":"cActMakerCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187940","object_id":"column-187940","name":"cActMakerName","name_without_path":"cActMakerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187941","object_id":"column-187941","name":"cActPerformerCode","name_without_path":"cActPerformerCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187942","object_id":"column-187942","name":"cActPerformerName","name_without_path":"cActPerformerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187943","object_id":"column-187943","name":"cCustCode","name_without_path":"cCustCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187944","object_id":"column-187944","name":"cCustName","name_without_path":"cCustName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187945","object_id":"column-187945","name":"cOpptCode","name_without_path":"cOpptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187946","object_id":"column-187946","name":"cOpptName","name_without_path":"cOpptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187947","object_id":"column-187947","name":"cContactCode","name_without_path":"cContactCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187948","object_id":"column-187948","name":"cContactName","name_without_path":"cContactName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187949","object_id":"column-187949","name":"cOpptSeqOID","name_without_path":"cOpptSeqOID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187950","object_id":"column-187950","name":"cActStatusCode","name_without_path":"cActStatusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187951","object_id":"column-187951","name":"cActStatusName","name_without_path":"cActStatusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187952","object_id":"column-187952","name":"cActPriorityCode","name_without_path":"cActPriorityCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187953","object_id":"column-187953","name":"cActPriorityName","name_without_path":"cActPriorityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};