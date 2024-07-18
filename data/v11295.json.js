window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11295","name":"hr_v_HM300_Detail_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM300_Detail_show as  select HR_OM_LeaveApply.cVoucherId as T_cVoucherId ,HR_OM_LeaveApply.cModifyBy as T_cModifyBy , convert(nchar(19),HR_OM_LeaveApply.dModifyOn,120) as T_dModifyOn,HR_OM_LeaveApply.cAuditBy as T_cAuditBy , convert(nchar(19),HR_OM_LeaveApply.dCreateOn,120) as T_dCreateOn, convert(nchar(19),HR_OM_LeaveApply.dSubmitOn,120) as T_dSubmitOn, convert(nchar(19),HR_OM_LeaveApply.dAuditOn,120) as T_dAuditOn,HR_OM_LeaveApply.PK_HR_OM_LeaveApply as T_PK_HR_OM_LeaveApply ,HR_OM_LeaveApply.cCode as T_cCode ,HR_OM_LeaveApply.cVoucherType as T_cVoucherType ,HR_OM_LeaveApply.bInFlow as T_bInFlow , department1.cDepName AS T_cDepCode,HR_OM_LeaveApply.cVoucherCode as T_cVoucherCode ,HR_OM_LeaveApply.vRemark as T_vRemark ,HR_OM_LeaveApply.cCurrentAuditor as T_cCurrentAuditor ,HR_OM_LeaveApply.cSysBarCode as T_cSysBarCode ,HR_OM_LeaveApply.Vt_ID as T_Vt_ID , convert(nchar(19),HR_OM_LeaveApply.dAppLeaveDate,120) as T_dAppLeaveDate, case HR_OM_LeaveApply.vApplyType when '0' then '辞职' when '1' then '辞退' when '2' then '退休' else '离职' end as T_vApplyType, HR_CT4182.vdescription AS T_vLeaveClass, convert(NVARCHAR,convert(money,HR_OM_LeaveApply.ufts),2) as 'ufts', hr_ct0113.vDescription AS T_vLeaveReason, hr_ct0994.vdescription AS T_cStatus,HR_OM_LeaveApply.cCreateBy as T_cCreateBy ,HR_OM_LeaveApply.cSubmitBy as T_cSubmitBy ,HR_OM_LeaveApplyDetail.cPsn_Num as B_cPsn_Num ,HR_OM_LeaveApplyDetail.cDutyCode as B_cDutyCode ,HR_OM_Duty.vDutyName as B_vDutyName , convert(nchar(19),HR_OM_LeaveApplyDetail.dEnterDate,120) as B_dEnterDate, HR_CT0025.vdescription AS B_rEducation, convert(nchar(19),HR_OM_LeaveApplyDetail.dAppLeaveDate,120) as B_dAppLeaveDate, HR_CT4186.vdescription AS B_vLeaveClass, hr_ct0117.vDescription AS B_vLeaveReason, hr_ct0008.vdescription AS B_rChgPersonType, convert(nchar(19),HR_OM_LeaveApplyDetail.dLeaveDate,120) as B_dLeaveDate,HR_OM_LeaveApplyDetail.cContact as B_cContact , hr_hi_person9.cpsn_name AS B_cPsn_Name, hr_hi_person10.cpsn_name AS B_cInterviewPerson1, Department11.cDepName AS B_cInterviewDept1, convert(nchar(19),HR_OM_LeaveApplyDetail.dInterviewDate1,120) as B_dInterviewDate1,HR_OM_LeaveApplyDetail.cInterviewNote1 as B_cInterviewNote1 , hr_hi_person12.cpsn_name AS B_cInterviewPerson2, Department13.cDepName AS B_cInterviewDept2, convert(nchar(19),HR_OM_LeaveApplyDetail.dInterviewDate2,120) as B_dInterviewDate2,HR_OM_LeaveApplyDetail.cInterviewNote2 as B_cInterviewNote2 , hr_hi_person14.cpsn_name AS B_cInterviewPerson3, Department15.cDepName AS B_cInterviewDept3,hr_hi_person.jobnumber as B_jobnumber , convert(nchar(19),HR_OM_LeaveApplyDetail.dInterviewDate3,120) as B_dInterviewDate3,HR_OM_LeaveApplyDetail.cInterviewNote3 as B_cInterviewNote3 ,HR_OM_LeaveApplyDetail.cLeaveRegisterForm as B_cLeaveRegisterForm ,HR_OM_LeaveApplyDetail.cVoucherId as B_cVoucherId ,HR_OM_LeaveApplyDetail.PK_HR_OM_LeaveApplyDetail as B_PK_HR_OM_LeaveApplyDetail ,HR_OM_LeaveApplyDetail.iRecordID as B_iRecordID , HR_CT00116.vdescription AS B_rSex, hr_ct00017.vdescription AS B_rPersonType,HR_OM_LeaveApplyDetail.cbSysBarCode as B_cbSysBarCode ,HR_OM_LeaveApplyDetail.cDepCode as B_cDepCode ,HR_OM_LeaveApplyDetail.cDepName as B_cDepName ,HR_OM_LeaveApplyDetail.cJobcode as B_cJobcode ,HR_OM_LeaveApplyDetail.cJobName as B_cJobName , Department.iDepOrder as B_iDepOrder  from HR_OM_LeaveApply left join HR_OM_LeaveApplyDetail on HR_OM_LeaveApply.cVoucherId =HR_OM_LeaveApplyDetail.cVoucherId  left join hr_hi_person on HR_OM_LeaveApplyDetail.cPsn_num = hr_hi_person.cPsn_num  left join department on hr_hi_person.cDept_num=department.cDepcode left join hr_hi_probation on HR_OM_LeaveApplyDetail.cPsn_num = hr_hi_probation.cPsn_num and hr_hi_probation.blastflag =1  left join HR_OM_Duty on HR_OM_LeaveApplyDetail.cDutyCode = HR_OM_Duty.cDutyCode  Left join department as department1 on HR_OM_LeaveApply.cDepCode=department1.CDepCode Left join HR_CT418 as HR_CT4182 on HR_OM_LeaveApply.vLeaveClass=HR_CT4182.ccodeid Left join hr_ct011 as hr_ct0113 on HR_OM_LeaveApply.vLeaveReason=hr_ct0113.cCodeID Left join hr_ct099 as hr_ct0994 on HR_OM_LeaveApply.cStatus=hr_ct0994.ccodeid Left join HR_CT002 as HR_CT0025 on HR_OM_LeaveApplyDetail.rEducation=HR_CT0025.ccodeid Left join HR_CT418 as HR_CT4186 on HR_OM_LeaveApplyDetail.vLeaveClass=HR_CT4186.ccodeid Left join hr_ct011 as hr_ct0117 on HR_OM_LeaveApplyDetail.vLeaveReason=hr_ct0117.cCodeID Left join hr_ct000 as hr_ct0008 on HR_OM_LeaveApplyDetail.rChgPersonType=hr_ct0008.ccodeid Left join hr_hi_person as hr_hi_person9 on hr_hi_person.cpsn_num=hr_hi_person9.cpsn_num Left join hr_hi_person as hr_hi_person10 on HR_OM_LeaveApplyDetail.cInterviewPerson1=hr_hi_person10.cpsn_num Left join Department as Department11 on HR_OM_LeaveApplyDetail.cInterviewDept1=Department11.CDepCode Left join hr_hi_person as hr_hi_person12 on HR_OM_LeaveApplyDetail.cInterviewPerson2=hr_hi_person12.cpsn_num Left join Department as Department13 on HR_OM_LeaveApplyDetail.cInterviewDept2=Department13.CDepCode Left join hr_hi_person as hr_hi_person14 on HR_OM_LeaveApplyDetail.cInterviewPerson3=hr_hi_person14.cpsn_num Left join Department as Department15 on HR_OM_LeaveApplyDetail.cInterviewDept3=Department15.CDepCode Left join HR_CT001 as HR_CT00116 on hr_hi_person.rSex=HR_CT00116.ccodeid Left join hr_ct000 as hr_ct00017 on HR_OM_LeaveApplyDetail.rPersonType=hr_ct00017.ccodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM300_Detail_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224853","object_id":"column-224853","name":"T_cVoucherId","name_without_path":"T_cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224854","object_id":"column-224854","name":"T_cModifyBy","name_without_path":"T_cModifyBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224855","object_id":"column-224855","name":"T_dModifyOn","name_without_path":"T_dModifyOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224856","object_id":"column-224856","name":"T_cAuditBy","name_without_path":"T_cAuditBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224857","object_id":"column-224857","name":"T_dCreateOn","name_without_path":"T_dCreateOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224858","object_id":"column-224858","name":"T_dSubmitOn","name_without_path":"T_dSubmitOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224859","object_id":"column-224859","name":"T_dAuditOn","name_without_path":"T_dAuditOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224860","object_id":"column-224860","name":"T_PK_HR_OM_LeaveApply","name_without_path":"T_PK_HR_OM_LeaveApply","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224861","object_id":"column-224861","name":"T_cCode","name_without_path":"T_cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224862","object_id":"column-224862","name":"T_cVoucherType","name_without_path":"T_cVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224863","object_id":"column-224863","name":"T_bInFlow","name_without_path":"T_bInFlow","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224864","object_id":"column-224864","name":"T_cDepCode","name_without_path":"T_cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224865","object_id":"column-224865","name":"T_cVoucherCode","name_without_path":"T_cVoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224866","object_id":"column-224866","name":"T_vRemark","name_without_path":"T_vRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224867","object_id":"column-224867","name":"T_cCurrentAuditor","name_without_path":"T_cCurrentAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224868","object_id":"column-224868","name":"T_cSysBarCode","name_without_path":"T_cSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224869","object_id":"column-224869","name":"T_Vt_ID","name_without_path":"T_Vt_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224870","object_id":"column-224870","name":"T_dAppLeaveDate","name_without_path":"T_dAppLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224871","object_id":"column-224871","name":"T_vApplyType","name_without_path":"T_vApplyType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224872","object_id":"column-224872","name":"T_vLeaveClass","name_without_path":"T_vLeaveClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224873","object_id":"column-224873","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224874","object_id":"column-224874","name":"T_vLeaveReason","name_without_path":"T_vLeaveReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224875","object_id":"column-224875","name":"T_cStatus","name_without_path":"T_cStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224876","object_id":"column-224876","name":"T_cCreateBy","name_without_path":"T_cCreateBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224877","object_id":"column-224877","name":"T_cSubmitBy","name_without_path":"T_cSubmitBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224878","object_id":"column-224878","name":"B_cPsn_Num","name_without_path":"B_cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224879","object_id":"column-224879","name":"B_cDutyCode","name_without_path":"B_cDutyCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224880","object_id":"column-224880","name":"B_vDutyName","name_without_path":"B_vDutyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224881","object_id":"column-224881","name":"B_dEnterDate","name_without_path":"B_dEnterDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224882","object_id":"column-224882","name":"B_rEducation","name_without_path":"B_rEducation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224883","object_id":"column-224883","name":"B_dAppLeaveDate","name_without_path":"B_dAppLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224884","object_id":"column-224884","name":"B_vLeaveClass","name_without_path":"B_vLeaveClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224885","object_id":"column-224885","name":"B_vLeaveReason","name_without_path":"B_vLeaveReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224886","object_id":"column-224886","name":"B_rChgPersonType","name_without_path":"B_rChgPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224887","object_id":"column-224887","name":"B_dLeaveDate","name_without_path":"B_dLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224888","object_id":"column-224888","name":"B_cContact","name_without_path":"B_cContact","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224889","object_id":"column-224889","name":"B_cPsn_Name","name_without_path":"B_cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224890","object_id":"column-224890","name":"B_cInterviewPerson1","name_without_path":"B_cInterviewPerson1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224891","object_id":"column-224891","name":"B_cInterviewDept1","name_without_path":"B_cInterviewDept1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224892","object_id":"column-224892","name":"B_dInterviewDate1","name_without_path":"B_dInterviewDate1","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224893","object_id":"column-224893","name":"B_cInterviewNote1","name_without_path":"B_cInterviewNote1","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224894","object_id":"column-224894","name":"B_cInterviewPerson2","name_without_path":"B_cInterviewPerson2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224895","object_id":"column-224895","name":"B_cInterviewDept2","name_without_path":"B_cInterviewDept2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224896","object_id":"column-224896","name":"B_dInterviewDate2","name_without_path":"B_dInterviewDate2","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224897","object_id":"column-224897","name":"B_cInterviewNote2","name_without_path":"B_cInterviewNote2","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224898","object_id":"column-224898","name":"B_cInterviewPerson3","name_without_path":"B_cInterviewPerson3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224899","object_id":"column-224899","name":"B_cInterviewDept3","name_without_path":"B_cInterviewDept3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224900","object_id":"column-224900","name":"B_jobnumber","name_without_path":"B_jobnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224901","object_id":"column-224901","name":"B_dInterviewDate3","name_without_path":"B_dInterviewDate3","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224902","object_id":"column-224902","name":"B_cInterviewNote3","name_without_path":"B_cInterviewNote3","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224903","object_id":"column-224903","name":"B_cLeaveRegisterForm","name_without_path":"B_cLeaveRegisterForm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224904","object_id":"column-224904","name":"B_cVoucherId","name_without_path":"B_cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224905","object_id":"column-224905","name":"B_PK_HR_OM_LeaveApplyDetail","name_without_path":"B_PK_HR_OM_LeaveApplyDetail","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224906","object_id":"column-224906","name":"B_iRecordID","name_without_path":"B_iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224907","object_id":"column-224907","name":"B_rSex","name_without_path":"B_rSex","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224908","object_id":"column-224908","name":"B_rPersonType","name_without_path":"B_rPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224909","object_id":"column-224909","name":"B_cbSysBarCode","name_without_path":"B_cbSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224910","object_id":"column-224910","name":"B_cDepCode","name_without_path":"B_cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224911","object_id":"column-224911","name":"B_cDepName","name_without_path":"B_cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224912","object_id":"column-224912","name":"B_cJobcode","name_without_path":"B_cJobcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224913","object_id":"column-224913","name":"B_cJobName","name_without_path":"B_cJobName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224914","object_id":"column-224914","name":"B_iDepOrder","name_without_path":"B_iDepOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};