window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12965","name":"v_ex_creditstatics","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_creditstatics as --信用证统计表  \r\nselect     \r\nccuscode,--客户编号    \r\nccusabbname,--客户简称    \r\nccusname,--客户名称    \r\nccusenname,--客户英文名称    \r\nccreditcode,--信用证编号    \r\ncgeneralordercode,--出口订单号    \r\ncdepcode,--部门编码    \r\ncdepname,--部门    \r\ncpersoncode,--业务员编号    \r\ncpersonname,--业务员    \r\nibustypeid,--业务类型id    \r\ncbustype,--业务类型    \r\ncstcode,--销售类型编号    \r\ncstname,--销售类型    \r\niincotermid,--贸易术语id    \r\ncincotermcode,--贸易术语    \r\nitmid,--贸易方式id    \r\nctmcode,--贸易方式代码    \r\nctmname,--贸易方式    \r\ncexch_code,--币符    \r\ncexch_name,--币种    \r\nccreditbackensure,--开证行保证    \r\nccreditbank,--开证行名称    \r\nccreditbankaccount,--开证行账号    \r\nccreditbankaddr,--开证行地址    \r\ncbaccount,--议付银行账号    \r\ncbcode,--议付银行编码    \r\ncbname,--议付银行    \r\ncinformbank,--通知行名称    \r\ncpaybank,--付款银行    \r\ncpaybankaccount,--付款银行账号    \r\nipayday,--付款期限id    \r\ncpayday,--付款期限    \r\nipaystyle,--付款方式id    \r\ncpaystyle,--付款方式    \r\ncpayperson,--付款人    \r\nfcreditmoney,--信用证金额    \r\nfsummoney,--原币总额    \r\nfnatsummoney,--本币总额    \r\nfnegotiationmoney,--押汇金额    \r\nfexsettlemoney,--结汇金额  \r\nipaymentstyle,--结汇方式id    \r\ncpaymentstyle--结汇方式    \r\nfrom v_ex_credit","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_creditstatics"},{"field":"Type","value":"View"}],"columns":[{"id":"column-334991","object_id":"column-334991","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334992","object_id":"column-334992","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334993","object_id":"column-334993","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334994","object_id":"column-334994","name":"ccusenname","name_without_path":"ccusenname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334995","object_id":"column-334995","name":"ccreditcode","name_without_path":"ccreditcode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334996","object_id":"column-334996","name":"cgeneralordercode","name_without_path":"cgeneralordercode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334997","object_id":"column-334997","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334998","object_id":"column-334998","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-334999","object_id":"column-334999","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335000","object_id":"column-335000","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335001","object_id":"column-335001","name":"ibustypeid","name_without_path":"ibustypeid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335002","object_id":"column-335002","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335003","object_id":"column-335003","name":"cstcode","name_without_path":"cstcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335004","object_id":"column-335004","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335005","object_id":"column-335005","name":"iincotermid","name_without_path":"iincotermid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335006","object_id":"column-335006","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335007","object_id":"column-335007","name":"itmid","name_without_path":"itmid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335008","object_id":"column-335008","name":"ctmcode","name_without_path":"ctmcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335009","object_id":"column-335009","name":"ctmname","name_without_path":"ctmname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335010","object_id":"column-335010","name":"cexch_code","name_without_path":"cexch_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335011","object_id":"column-335011","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335012","object_id":"column-335012","name":"ccreditbackensure","name_without_path":"ccreditbackensure","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335013","object_id":"column-335013","name":"ccreditbank","name_without_path":"ccreditbank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335014","object_id":"column-335014","name":"ccreditbankaccount","name_without_path":"ccreditbankaccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335015","object_id":"column-335015","name":"ccreditbankaddr","name_without_path":"ccreditbankaddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335016","object_id":"column-335016","name":"cbaccount","name_without_path":"cbaccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335017","object_id":"column-335017","name":"cbcode","name_without_path":"cbcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335018","object_id":"column-335018","name":"cbname","name_without_path":"cbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335019","object_id":"column-335019","name":"cinformbank","name_without_path":"cinformbank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335020","object_id":"column-335020","name":"cpaybank","name_without_path":"cpaybank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335021","object_id":"column-335021","name":"cpaybankaccount","name_without_path":"cpaybankaccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335022","object_id":"column-335022","name":"ipayday","name_without_path":"ipayday","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335023","object_id":"column-335023","name":"cpayday","name_without_path":"cpayday","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335024","object_id":"column-335024","name":"ipaystyle","name_without_path":"ipaystyle","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335025","object_id":"column-335025","name":"cpaystyle","name_without_path":"cpaystyle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335026","object_id":"column-335026","name":"cpayperson","name_without_path":"cpayperson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335027","object_id":"column-335027","name":"fcreditmoney","name_without_path":"fcreditmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335028","object_id":"column-335028","name":"fsummoney","name_without_path":"fsummoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335029","object_id":"column-335029","name":"fnatsummoney","name_without_path":"fnatsummoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335030","object_id":"column-335030","name":"fnegotiationmoney","name_without_path":"fnegotiationmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335031","object_id":"column-335031","name":"fexsettlemoney","name_without_path":"fexsettlemoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335032","object_id":"column-335032","name":"ipaymentstyle","name_without_path":"ipaymentstyle","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-335033","object_id":"column-335033","name":"cpaymentstyle","name_without_path":"cpaymentstyle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};