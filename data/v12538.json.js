window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12538","name":"tc_user","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[tc_user] \r\n AS \r\n \tselect a.cPsn_Num as user_id,--人员编码  \r\n \ta.cPsn_Num as emp_no,--员工编号  \r\n \ta.cPsn_Name as user_name,--人员名称  \r\n \ta.JobNumber as job_number,--工号  \r\n \ta.cPsn_NameEn,--英文名  \r\n \ta.rSex,--性别  \r\n \ta.cDept_num as dept_id,--行政部门  \r\n \ta.rEmployState,--雇佣状态  \r\n \ta.rPersonType,--人员类别  \r\n \ta.rIDType,--证件类型  \r\n \ta.vIDNo,--证件号码  \r\n \ta.PersonDepart,--签发机关  \r\n \ta.CardEffectiveBeginTime,--开始时间  \r\n \ta.CardEffectiveEndTime,--截止时间  \r\n \ta.dBirthDate,--出生日期  \r\n \ta.cPsnBankCode,--银行  \r\n \ta.cPsnAccount,--账号  \r\n \ta.dEnterUnitDate,--到职日期  \r\n \ta.dLeaveDate,--离职日期  \r\n \ta.cPsnProperty,--人员属性  \r\n \t -- 是否操作员,  \r\n \td.cUser_Id as login_code,--对应操作员编码  \r\n \td.Cuser_Name as login_name,--对应操作员名称  \r\n \ta.bPsnPerson,--是否业务员  \r\n \ta.bpsnshop,--是否营业员  \r\n \tb.dPValidDate,--生效日期  \r\n \tb.dPInValidDate,--失效日期  \r\n \tb.cDepCode,--业务或费用部门  \r\n \tb.iCreDate,--信用天数  \r\n \tb.fCreditQuantity,--信用额度  \r\n \tb.cCreGrade,--信用等级  \r\n \ta.cPsnOPhone as phone,--办公电话  \r\n \ta.cPsnInPhone as extension,--内线电话  \r\n \ta.CpsnOSeat,--工位  \r\n \ta.cPsnPostCode,--邮政编码  \r\n \ta.cPsnPostAddr,--通讯地址  \r\n \ta.cPsnEmail as email,--Email地址  \r\n \ta.cPsnMobilePhone as  mobile,--手机号  \r\n \ta.cPsnFPhone,--家庭电话  \r\n \ta.cPsnFAddr,--家庭住址  \r\n \ta.cPsnURL,--网址  \r\n \ta.cPsnQQCode,--QQ号  \r\n \ta.vCardNo,--考勤卡号  \r\n \ta.bTakeTM,--是否考勤  \r\n \ta.cDutyclass,--班组  \r\n \ta.dEnterDate,--进入本行业时间  \r\n \ta.dJoinworkDate,--参加工作时间  \r\n \ta.dRegularDate,--转正时间  \r\n \ta.rPerResidence,--户籍  \r\n \ta.rNativePlace,--籍贯  \r\n \ta.rMarriStatus,--婚姻状况  \r\n \ta.rNational,--民族  \r\n \ta.vSSNo,--社会保障号  \r\n \ta.rCountry,--国家地区  \r\n \ta.rFigure,--职员身份  \r\n \ta.rhealthStatus,--健康状况  \r\n \ta.rWorkStatus,--从业状况  \r\n \ta.vAliaName,--曾用名  \r\n \ta.bProbation,--是否是试用人员  \r\n \ta.rCheckInFlag,--审核标志  \r\n \ta.employmentForm,--用工形式  \r\n \ta.sysAge,--年龄  \r\n \ta.SysCompage,--司龄  \r\n \ta.SysWorkAge,--工龄  \r\n \ta.CRegion,--福利地区  \r\n \ta.NatrueType,--户口性质  \r\n \ta.KeyPerson,--是否核心人才  \r\n \ta.cLeaveReson,--离职原因  \r\n \ta.cFax,  \r\n \ta.cReportTo,  \r\n \ta.cStartWorkTime,  \r\n \ta.cEndWorkTime,  \r\n \ta.cLoginSubIDs , \r\n \tconvert(varchar(20),a.MaxLeadNum) AS MaxLeadNum,--最大线索数\r\n\tconvert(varchar(20),a.MaxPAccountNum) AS MaxPAccountNum,--最大潜在客户数\r\n\tconvert(varchar(20),a.MaxAccountNum) AS MaxAccountNum,--最大正式客户数\r\n\tconvert(varchar(20),a.MaxOpportunityNum) AS MaxOpportunityNum,--最大销售机会数\r\n \ta.LeadRcyReg AS LeadRcyReg,--线索回收规则\r\n \ta.PAccountRcyReg AS PAccountRcyReg,--潜在客户回收规则\r\n \ta.OpportunityRcyReg AS OpportunityRcyReg, --销售机会回收规则\r\n \ta.FAccountRcyReg as AccountRcyReg,\r\n\ta.cWeixinid --微信 \t                                          \r\n \tfrom  hr_hi_person AS a  WITH(NOLOCK) left outer JOIN  \r\n \t\t Person AS b   WITH(NOLOCK)  ON a.cPsn_Num = b.cPersonCode left outer JOIN  \r\n \t\t UserHrPersonContro AS c   WITH(NOLOCK)  ON a.cPsn_Num = c.cPsn_Num left outer JOIN  \r\n \t\t UA_User AS d   WITH(NOLOCK)  ON c.cUser_Id = d.cUser_Id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"tc_user"},{"field":"Type","value":"View"}],"columns":[{"id":"column-310810","object_id":"column-310810","name":"user_id","name_without_path":"user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310811","object_id":"column-310811","name":"emp_no","name_without_path":"emp_no","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310812","object_id":"column-310812","name":"user_name","name_without_path":"user_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310813","object_id":"column-310813","name":"job_number","name_without_path":"job_number","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310814","object_id":"column-310814","name":"cPsn_NameEn","name_without_path":"cPsn_NameEn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310815","object_id":"column-310815","name":"rSex","name_without_path":"rSex","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310816","object_id":"column-310816","name":"dept_id","name_without_path":"dept_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310817","object_id":"column-310817","name":"rEmployState","name_without_path":"rEmployState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310818","object_id":"column-310818","name":"rPersonType","name_without_path":"rPersonType","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310819","object_id":"column-310819","name":"rIDType","name_without_path":"rIDType","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310820","object_id":"column-310820","name":"vIDNo","name_without_path":"vIDNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310821","object_id":"column-310821","name":"PersonDepart","name_without_path":"PersonDepart","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310822","object_id":"column-310822","name":"CardEffectiveBeginTime","name_without_path":"CardEffectiveBeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310823","object_id":"column-310823","name":"CardEffectiveEndTime","name_without_path":"CardEffectiveEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310824","object_id":"column-310824","name":"dBirthDate","name_without_path":"dBirthDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310825","object_id":"column-310825","name":"cPsnBankCode","name_without_path":"cPsnBankCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310826","object_id":"column-310826","name":"cPsnAccount","name_without_path":"cPsnAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310827","object_id":"column-310827","name":"dEnterUnitDate","name_without_path":"dEnterUnitDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310828","object_id":"column-310828","name":"dLeaveDate","name_without_path":"dLeaveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310829","object_id":"column-310829","name":"cPsnProperty","name_without_path":"cPsnProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310830","object_id":"column-310830","name":"login_code","name_without_path":"login_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310831","object_id":"column-310831","name":"login_name","name_without_path":"login_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310832","object_id":"column-310832","name":"bPsnPerson","name_without_path":"bPsnPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310833","object_id":"column-310833","name":"bpsnshop","name_without_path":"bpsnshop","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310834","object_id":"column-310834","name":"dPValidDate","name_without_path":"dPValidDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310835","object_id":"column-310835","name":"dPInValidDate","name_without_path":"dPInValidDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310836","object_id":"column-310836","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310837","object_id":"column-310837","name":"iCreDate","name_without_path":"iCreDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310838","object_id":"column-310838","name":"fCreditQuantity","name_without_path":"fCreditQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310839","object_id":"column-310839","name":"cCreGrade","name_without_path":"cCreGrade","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310840","object_id":"column-310840","name":"phone","name_without_path":"phone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310841","object_id":"column-310841","name":"extension","name_without_path":"extension","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310842","object_id":"column-310842","name":"CpsnOSeat","name_without_path":"CpsnOSeat","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310843","object_id":"column-310843","name":"cPsnPostCode","name_without_path":"cPsnPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310844","object_id":"column-310844","name":"cPsnPostAddr","name_without_path":"cPsnPostAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310845","object_id":"column-310845","name":"email","name_without_path":"email","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310846","object_id":"column-310846","name":"mobile","name_without_path":"mobile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310847","object_id":"column-310847","name":"cPsnFPhone","name_without_path":"cPsnFPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310848","object_id":"column-310848","name":"cPsnFAddr","name_without_path":"cPsnFAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310849","object_id":"column-310849","name":"cPsnURL","name_without_path":"cPsnURL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310850","object_id":"column-310850","name":"cPsnQQCode","name_without_path":"cPsnQQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310851","object_id":"column-310851","name":"vCardNo","name_without_path":"vCardNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310852","object_id":"column-310852","name":"bTakeTM","name_without_path":"bTakeTM","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310853","object_id":"column-310853","name":"cDutyclass","name_without_path":"cDutyclass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310854","object_id":"column-310854","name":"dEnterDate","name_without_path":"dEnterDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310855","object_id":"column-310855","name":"dJoinworkDate","name_without_path":"dJoinworkDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310856","object_id":"column-310856","name":"dRegularDate","name_without_path":"dRegularDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310857","object_id":"column-310857","name":"rPerResidence","name_without_path":"rPerResidence","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310858","object_id":"column-310858","name":"rNativePlace","name_without_path":"rNativePlace","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310859","object_id":"column-310859","name":"rMarriStatus","name_without_path":"rMarriStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310860","object_id":"column-310860","name":"rNational","name_without_path":"rNational","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310861","object_id":"column-310861","name":"vSSNo","name_without_path":"vSSNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"25","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310862","object_id":"column-310862","name":"rCountry","name_without_path":"rCountry","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310863","object_id":"column-310863","name":"rFigure","name_without_path":"rFigure","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310864","object_id":"column-310864","name":"rhealthStatus","name_without_path":"rhealthStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310865","object_id":"column-310865","name":"rWorkStatus","name_without_path":"rWorkStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310866","object_id":"column-310866","name":"vAliaName","name_without_path":"vAliaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310867","object_id":"column-310867","name":"bProbation","name_without_path":"bProbation","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310868","object_id":"column-310868","name":"rCheckInFlag","name_without_path":"rCheckInFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310869","object_id":"column-310869","name":"employmentForm","name_without_path":"employmentForm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310870","object_id":"column-310870","name":"sysAge","name_without_path":"sysAge","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310871","object_id":"column-310871","name":"SysCompage","name_without_path":"SysCompage","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310872","object_id":"column-310872","name":"SysWorkAge","name_without_path":"SysWorkAge","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310873","object_id":"column-310873","name":"CRegion","name_without_path":"CRegion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310874","object_id":"column-310874","name":"NatrueType","name_without_path":"NatrueType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310875","object_id":"column-310875","name":"KeyPerson","name_without_path":"KeyPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310876","object_id":"column-310876","name":"cLeaveReson","name_without_path":"cLeaveReson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310877","object_id":"column-310877","name":"cFax","name_without_path":"cFax","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310878","object_id":"column-310878","name":"cReportTo","name_without_path":"cReportTo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310879","object_id":"column-310879","name":"cStartWorkTime","name_without_path":"cStartWorkTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310880","object_id":"column-310880","name":"cEndWorkTime","name_without_path":"cEndWorkTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310881","object_id":"column-310881","name":"cLoginSubIDs","name_without_path":"cLoginSubIDs","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310882","object_id":"column-310882","name":"MaxLeadNum","name_without_path":"MaxLeadNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310883","object_id":"column-310883","name":"MaxPAccountNum","name_without_path":"MaxPAccountNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310884","object_id":"column-310884","name":"MaxAccountNum","name_without_path":"MaxAccountNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310885","object_id":"column-310885","name":"MaxOpportunityNum","name_without_path":"MaxOpportunityNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310886","object_id":"column-310886","name":"LeadRcyReg","name_without_path":"LeadRcyReg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310887","object_id":"column-310887","name":"PAccountRcyReg","name_without_path":"PAccountRcyReg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310888","object_id":"column-310888","name":"OpportunityRcyReg","name_without_path":"OpportunityRcyReg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310889","object_id":"column-310889","name":"AccountRcyReg","name_without_path":"AccountRcyReg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310890","object_id":"column-310890","name":"cWeixinid","name_without_path":"cWeixinid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};