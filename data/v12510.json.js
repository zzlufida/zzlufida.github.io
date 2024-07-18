window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12510","name":"tc_ardetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--核销明细\r\nCREATE view [dbo].[tc_ardetail]  \r\nas   \r\nselect db_name() + convert(nvarchar(10), SaleBillVouchs.AutoID) as vouchcode,\r\n       db_name() + convert(nvarchar(10), SaleBillVouchs.AutoID) as detailid,\r\n       max(convert(char(10), Ar_Detail.dVouchDate, 20)) as vouchdate,\r\n       SO_SOMain.cCusCode as customercode,\t--客户编码  \r\n       SO_SOMain.cDepCode as departmentcode,\t--部门编码  \r\n       SO_SOMain.cPersonCode as cperson,\t--员工  \r\n       SO_SOMain.cexch_name as foreigncurrency,\t--币种  \r\n       SO_SOMain.iExchRate as iexchrate,\t--汇率  \r\n       SaleBillVouchs.cSoCode as orderid,\t--销售订单号  \r\n       SaleBillVouchs.iSOsID as isosid,\t--销售订单子表ID  \r\n       SO_SOMain.ID as isoid,\t--销售订单表ID  \r\n       SaleBillVouchs.cInvCode as cinvcode,\t--存货编码  \r\n       avg(SaleBillVouchs.iExchSum) as amount_f,\t--结算原币  \r\n       avg(SaleBillVouchs.iMoneySum) as amount,\t--结算本币  \r\n       avg(SaleBillVouchs.iSum -SaleBillVouchs.iExchSum) as damount_f,\t--原币余额  \r\n       avg(SaleBillVouchs.iNatSum -SaleBillVouchs.iMoneySum) as damount,\t--本币余额  \r\n       avg(SaleBillVouchs.iSum) as isum_f,\t--原币应收  \r\n       avg(SaleBillVouchs.iNatSum) as isum, --本币应收\r\n       ap_Closebill.iid\t--收款单ID\r\nfrom   SaleBillVouchs with(nolock)\r\n       left join SO_SOMain with(nolock)\r\n            on  SaleBillVouchs.corderCode = SO_SOMain.cSOCode\r\n       left join Ar_Detail with(nolock)\r\n            on  SaleBillVouchs.AutoID = Ar_Detail.ibvid \r\n       inner join ap_Closebill on ar_Detail.cvouchid=ap_Closebill.cVouchID \r\n       and ar_Detail.cvouchtype=ap_Closebill.cvouchtype\r\n       and ar_Detail.cVouchType in ('48','49') \r\n       and ar_Detail.cProcStyle like '9%'  \r\n       and ap_Closebill.cFlag='AR'\r\ngroup by\r\n       SaleBillVouchs.AutoID,\r\n       SO_SOMain.cCusCode,\r\n       SO_SOMain.cDepCode,\r\n       SO_SOMain.cPersonCode,\r\n       SO_SOMain.cexch_name,\r\n       SO_SOMain.iExchRate,\r\n       SaleBillVouchs.cSoCode,\r\n       SaleBillVouchs.iSOsID,\r\n       SaleBillVouchs.AutoID,\r\n       SO_SOMain.ID,\r\n       SaleBillVouchs.cInvCode,\r\n       ap_Closebill.iid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"tc_ardetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-310180","object_id":"column-310180","name":"vouchcode","name_without_path":"vouchcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"138","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310181","object_id":"column-310181","name":"detailid","name_without_path":"detailid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"138","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310182","object_id":"column-310182","name":"vouchdate","name_without_path":"vouchdate","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310183","object_id":"column-310183","name":"customercode","name_without_path":"customercode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310184","object_id":"column-310184","name":"departmentcode","name_without_path":"departmentcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310185","object_id":"column-310185","name":"cperson","name_without_path":"cperson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310186","object_id":"column-310186","name":"foreigncurrency","name_without_path":"foreigncurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310187","object_id":"column-310187","name":"iexchrate","name_without_path":"iexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310188","object_id":"column-310188","name":"orderid","name_without_path":"orderid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310189","object_id":"column-310189","name":"isosid","name_without_path":"isosid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310190","object_id":"column-310190","name":"isoid","name_without_path":"isoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310191","object_id":"column-310191","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310192","object_id":"column-310192","name":"amount_f","name_without_path":"amount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310193","object_id":"column-310193","name":"amount","name_without_path":"amount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310194","object_id":"column-310194","name":"damount_f","name_without_path":"damount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310195","object_id":"column-310195","name":"damount","name_without_path":"damount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310196","object_id":"column-310196","name":"isum_f","name_without_path":"isum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310197","object_id":"column-310197","name":"isum","name_without_path":"isum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310198","object_id":"column-310198","name":"iid","name_without_path":"iid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};