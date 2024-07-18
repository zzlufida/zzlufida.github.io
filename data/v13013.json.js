window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13013","name":"v_ex_invoiceicfa_groupbyExp","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_invoiceicfa_groupbyExp \r\n--根据费用项目分类  \r\nas    \r\nselect     \r\nid,    \r\nccode                     ,--发票号t    \r\ncgeneralordercode         ,--            出口订单号t    \r\nccuscode                  ,--   客户编号t    \r\nccusname                  ,--   客户名称t    \r\nccusabbname               ,--      客户简称t    \r\nccusaddress               ,--      客户地址t    \r\ncdepcode                  ,--   部门编码t    \r\ncdepname                  ,--   部门t    \r\ncpersoncode               ,--      业务员编号t    \r\ncpersonname               ,--      业务员t    \r\nibustypeid                ,--     业务类型代号t    \r\ncbustype                  ,--   业务类型t    \r\ncstcode                   ,--  销售类型编号t    \r\ncstname                   ,--  销售类型t    \r\niincotermid               ,--      贸易术语代码t    \r\ncincotermcode             ,--        贸易术语t    \r\nitmid                     ,--贸易方式代码t    \r\nctmcode                   ,--  贸易方式编码t    \r\nctmname                   ,--  贸易方式t    \r\ncexch_code                ,--     币符t    \r\ncexch_name                ,--     币种t    \r\ncstatexch_code            ,--         统计币符t    \r\ncstatexch_name            ,--         统计币种t    \r\nfnatsummoney              ,--       本币总额t--收入    \r\nfare.ffarenatmoney  ,--费用    \r\nfexchrate,  \r\nbcal,ddate ,cexpcode,cexpname\r\n from v_ex_invoice_all v_ex_invoice\r\nleft join(  \r\nselect ex_invoicedetail.id as invid,ex_faredetail.ccitem as cexpcode,ExpenseItem.cexpname as cexpname,sum(isnull(ex_faredetail.fnatmoney,0))  as ffarenatmoney    \r\nfrom ex_invoicedetail    \r\nleft join ex_faredetail on ex_invoicedetail.guids = ex_faredetail.guid_source  AND ex_faredetail.objectid_source IN('EX26','EX27')    \r\nleft join ExpenseItem ON ex_faredetail.ccitem = dbo.ExpenseItem.cExpCode \r\ngroup by ex_invoicedetail.id,ex_faredetail.ccitem,ExpenseItem.cexpname\r\n ) as fare on v_ex_invoice.id = fare.invid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_invoiceicfa_groupbyExp"},{"field":"Type","value":"View"}],"columns":[{"id":"column-339455","object_id":"column-339455","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339456","object_id":"column-339456","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339457","object_id":"column-339457","name":"cgeneralordercode","name_without_path":"cgeneralordercode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339458","object_id":"column-339458","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339459","object_id":"column-339459","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339460","object_id":"column-339460","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339461","object_id":"column-339461","name":"ccusaddress","name_without_path":"ccusaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339462","object_id":"column-339462","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339463","object_id":"column-339463","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339464","object_id":"column-339464","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339465","object_id":"column-339465","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339466","object_id":"column-339466","name":"ibustypeid","name_without_path":"ibustypeid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339467","object_id":"column-339467","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339468","object_id":"column-339468","name":"cstcode","name_without_path":"cstcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339469","object_id":"column-339469","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339470","object_id":"column-339470","name":"iincotermid","name_without_path":"iincotermid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339471","object_id":"column-339471","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339472","object_id":"column-339472","name":"itmid","name_without_path":"itmid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339473","object_id":"column-339473","name":"ctmcode","name_without_path":"ctmcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339474","object_id":"column-339474","name":"ctmname","name_without_path":"ctmname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339475","object_id":"column-339475","name":"cexch_code","name_without_path":"cexch_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339476","object_id":"column-339476","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339477","object_id":"column-339477","name":"cstatexch_code","name_without_path":"cstatexch_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339478","object_id":"column-339478","name":"cstatexch_name","name_without_path":"cstatexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339479","object_id":"column-339479","name":"fnatsummoney","name_without_path":"fnatsummoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339480","object_id":"column-339480","name":"ffarenatmoney","name_without_path":"ffarenatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339481","object_id":"column-339481","name":"fexchrate","name_without_path":"fexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"exexchrate: decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339482","object_id":"column-339482","name":"bcal","name_without_path":"bcal","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339483","object_id":"column-339483","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339484","object_id":"column-339484","name":"cexpcode","name_without_path":"cexpcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-339485","object_id":"column-339485","name":"cexpname","name_without_path":"cexpname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};