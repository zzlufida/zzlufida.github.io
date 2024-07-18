window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12994","name":"V_EX_ICFA","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_EX_ICFA    \r\nas    \r\nselect    \r\nex_order.ddate,    \r\nex_order.ccode  as  cordercode,    \r\ndepartment.cdepname,    \r\nex_order.cdepcode,    \r\nperson.cpersonname,    \r\nex_order.cpersoncode,    \r\ncustomer.ccccode,    \r\ncustomerclass.cccname,    \r\ncustomer.ccuscountrycode,    \r\nex_nation.cnationname,    \r\ndistrictclass.cdcname,    \r\ncustomer.cdccode,    \r\ncustomer.iid as icusiid,    \r\nex_order.ccuscode,    \r\ncustomer.ccusabbname,    \r\ncustomer.ccusenname,    \r\ncustomer.ccusname,    \r\nex_order.iincotermid,    \r\nv_ex_incoterms.cincotermcode,    \r\nv_ex_incoterms.cincotermsremark,    \r\nex_order.cexch_name,    \r\nforeigncurrency.cexch_code,    \r\nex_order.itmid,    \r\nex_trademode.ctmcode,    \r\nex_trademode.ctmname,    \r\nex_order.ibustypeid,ex_bustype.cbustype,    \r\nex_order.cstcode,    \r\nsaletype.cstname,    \r\nex_order.csscode,    \r\nsettlestyle.cssname,    \r\nex_order.csccode,    \r\nex_order.ccusordercode,\r\nex_order.cquotationcodes,\r\n( case when isnull(ex_order.ccloser,'')='' then 0 else 1 end )  as bOrderColsed,    \r\nshippingchoice.cscname,    \r\nex_shipport.cportname as csportname,    \r\nex_aimport.cportname as caportname,    \r\nex_orderdetail.irowno  as  iorderrowno,    \r\nex_orderdetail.autoid as iorderautoid,    \r\nex_orderdetail.cinvcode,    \r\ninventory.iid as iinviid,    \r\ninventory.cinvaddcode,    \r\ninventory.cinvname,    \r\n--inventory.cciqcode,  \r\ninventory.cinvstd,    \r\ninventory.cinvccode,    \r\ninventoryclass.cinvcname,    \r\ninventory.ccomunitcode,    \r\ncomputationunit.ccomunitname,    \r\nex_orderdetail.cfree1,    \r\nex_orderdetail.cfree2,    \r\nex_orderdetail.cfree3,    \r\nex_orderdetail.cfree4,    \r\nex_orderdetail.cfree5,    \r\nex_orderdetail.cfree6,    \r\nex_orderdetail.cfree7,    \r\nex_orderdetail.cfree8,    \r\nex_orderdetail.cfree9,    \r\nex_orderdetail.cfree10,    \r\nex_orderdetail.dshippingdate,    \r\nex_orderdetail.fquantity  as  forderquantity,    \r\nex_orderdetail.ftaxprice  as  fordertaxprice,    \r\nex_orderdetail.ftaxmoney  as  fordertaxmoney,    \r\nex_orderdetail.fnattaxprice  as  fnatordertaxprice,    \r\nex_orderdetail.fnattaxmoney  as  fnatordertaxmoney,    \r\nex_orderdetail.fdiscount  as  forderdiscount,    \r\nex_orderdetail.fnatdiscount  as  fnatorderdiscount,    \r\nex_orderdetail.fChangRate,    \r\nex_orderdetail.citem_cname,ex_orderdetail.citemcode,ex_orderdetail.citem_class,ex_orderdetail.citemname,\r\n(isnull(ex_orderdetail.fsaleqty,0)+isnull(ex_orderdetail.funsaleqty,0))  as  fconsignmentsaleqty,    \r\n(case when (isnull(ex_orderdetail.fsaleqty,0)+isnull(ex_orderdetail.funsaleqty,0))=0 then null else (isnull(ex_orderdetail.fsalemoney,0)+isnull(ex_orderdetail.funsalemoney,0))/(isnull(ex_orderdetail.fsaleqty,0)+isnull(ex_orderdetail.funsaleqty,0))end)  as\r\n  fconsignmenttaxprice,    \r\n(isnull(ex_orderdetail.fsalemoney,0)+isnull(ex_orderdetail.funsalemoney,0))  as  fconsignmentsalemoney,    \r\n(case when (isnull(ex_orderdetail.fsaleqty,0)+isnull(ex_orderdetail.funsaleqty,0))=0 then null else (isnull(ex_orderdetail.fnatsalemoney,0)+isnull(ex_orderdetail.fnatunsalemoney,0))/(isnull(ex_orderdetail.fsaleqty,0)+isnull(ex_orderdetail.funsaleqty,0))end)  as  fnatconsignmenttaxprice,    \r\n(isnull(ex_orderdetail.fnatsalemoney,0)+isnull(ex_orderdetail.fnatunsalemoney,0)) as fnatconsignmentsalemoney,    \r\n(isnull(ex_orderdetail.finvoiceqty,0)+isnull(ex_orderdetail.funinvoiceqty,0)) as finvoiceqty,    \r\n(case when (isnull(ex_orderdetail.finvoiceqty,0)+isnull(ex_orderdetail.funinvoiceqty,0))=0 then null else (isnull(ex_orderdetail.finvoicemoney,0)+isnull(ex_orderdetail.funinvoicemoney,0))/(isnull(ex_orderdetail.finvoiceqty,0)+isnull(ex_orderdetail.funinvoiceqty,0)) end ) as finvoicetaxprice,    \r\n(isnull(ex_orderdetail.finvoicemoney,0)+isnull(ex_orderdetail.funinvoicemoney,0)) as finvoicemoney,    \r\n(case when (isnull(ex_orderdetail.finvoiceqty,0)+isnull(ex_orderdetail.funinvoiceqty,0))=0 then null else (isnull(ex_orderdetail.fnatinvoicemoney,0)+isnull(ex_orderdetail.fnatuninvoicemoney,0))/(isnull(ex_orderdetail.finvoiceqty,0)+isnull(ex_orderdetail.funinvoiceqty,0)) end ) as fnatinvoicetaxprice,    \r\n(isnull(ex_orderdetail.fnatinvoicemoney,0)+isnull(ex_orderdetail.fnatuninvoicemoney,0)) as fnatinvoicemoney,isnull(ex_orderdetail.fnatfobmoney,0) as fnatfobmoney,isnull(inventory.fBackTaxRate,0) as fBackTaxRate,      \r\nCusInvContrapose.cCusInvCode,CusInvContrapose.cCusInvName    \r\nfrom ex_order left join ex_orderdetail on ex_orderdetail.id = ex_order.id         \r\nleft join customer on customer.ccuscode=ex_order.ccuscode    \r\nleft join districtclass on customer.cdccode=districtclass.cdccode    \r\nleft join customerclass on customer.ccccode=customerclass.ccccode    \r\nleft join ex_nation on ex_nation.cnationcode=customer.ccuscountrycode    \r\nleft join v_ex_incoterms on v_ex_incoterms.iincotermid=ex_order.iincotermid  \r\nleft join inventory on ex_orderdetail.cinvcode=inventory.cinvcode  \r\nleft join inventoryclass on inventory.cinvccode=inventoryclass.cinvccode  \r\nleft join department on ex_order.cdepcode=department.cdepcode     \r\nleft join  person on ex_order.cpersoncode=person.cpersoncode     \r\nleft join  foreigncurrency on ex_order.cexch_name = foreigncurrency.cexch_name    \r\nleft join  ex_trademode on ex_order.itmid=ex_trademode.itmid    \r\nleft join  ex_bustype on ex_bustype.ibustype = ex_order.ibustypeid  and ex_bustype.langid = @@langid      \r\nleft join  saletype on ex_order.cstcode=saletype.cstcode     \r\nleft join  settlestyle on ex_order.csscode=settlestyle.csscode    \r\nleft join  shippingchoice on ex_order.csccode=shippingchoice.csccode    \r\nleft join  ex_port ex_shipport on ex_order.isportid=ex_shipport.iportid    \r\nleft join  ex_port ex_aimport on ex_order.iaportid=ex_aimport.iportid    \r\nleft join computationunit on  inventory.ccomunitcode=computationunit.ccomunitcode  \r\nleft join CusInvContrapose on ex_order.cCusCode=CusInvContrapose.cCusCode and ex_orderdetail.cInvCode=CusInvContrapose.cInvCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_EX_ICFA"},{"field":"Type","value":"View"}],"columns":[{"id":"column-336924","object_id":"column-336924","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336925","object_id":"column-336925","name":"cordercode","name_without_path":"cordercode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336926","object_id":"column-336926","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336927","object_id":"column-336927","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336928","object_id":"column-336928","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336929","object_id":"column-336929","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336930","object_id":"column-336930","name":"ccccode","name_without_path":"ccccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336931","object_id":"column-336931","name":"cccname","name_without_path":"cccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336932","object_id":"column-336932","name":"ccuscountrycode","name_without_path":"ccuscountrycode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336933","object_id":"column-336933","name":"cnationname","name_without_path":"cnationname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336934","object_id":"column-336934","name":"cdcname","name_without_path":"cdcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336935","object_id":"column-336935","name":"cdccode","name_without_path":"cdccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336936","object_id":"column-336936","name":"icusiid","name_without_path":"icusiid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336937","object_id":"column-336937","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336938","object_id":"column-336938","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336939","object_id":"column-336939","name":"ccusenname","name_without_path":"ccusenname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336940","object_id":"column-336940","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336941","object_id":"column-336941","name":"iincotermid","name_without_path":"iincotermid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336942","object_id":"column-336942","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336943","object_id":"column-336943","name":"cincotermsremark","name_without_path":"cincotermsremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336944","object_id":"column-336944","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336945","object_id":"column-336945","name":"cexch_code","name_without_path":"cexch_code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336946","object_id":"column-336946","name":"itmid","name_without_path":"itmid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336947","object_id":"column-336947","name":"ctmcode","name_without_path":"ctmcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336948","object_id":"column-336948","name":"ctmname","name_without_path":"ctmname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336949","object_id":"column-336949","name":"ibustypeid","name_without_path":"ibustypeid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336950","object_id":"column-336950","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336951","object_id":"column-336951","name":"cstcode","name_without_path":"cstcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336952","object_id":"column-336952","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336953","object_id":"column-336953","name":"csscode","name_without_path":"csscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336954","object_id":"column-336954","name":"cssname","name_without_path":"cssname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336955","object_id":"column-336955","name":"csccode","name_without_path":"csccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336956","object_id":"column-336956","name":"ccusordercode","name_without_path":"ccusordercode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336957","object_id":"column-336957","name":"cquotationcodes","name_without_path":"cquotationcodes","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336958","object_id":"column-336958","name":"bOrderColsed","name_without_path":"bOrderColsed","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336959","object_id":"column-336959","name":"cscname","name_without_path":"cscname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336960","object_id":"column-336960","name":"csportname","name_without_path":"csportname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336961","object_id":"column-336961","name":"caportname","name_without_path":"caportname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336962","object_id":"column-336962","name":"iorderrowno","name_without_path":"iorderrowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336963","object_id":"column-336963","name":"iorderautoid","name_without_path":"iorderautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336964","object_id":"column-336964","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336965","object_id":"column-336965","name":"iinviid","name_without_path":"iinviid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336966","object_id":"column-336966","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336967","object_id":"column-336967","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336968","object_id":"column-336968","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336969","object_id":"column-336969","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336970","object_id":"column-336970","name":"cinvcname","name_without_path":"cinvcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336971","object_id":"column-336971","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336972","object_id":"column-336972","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336973","object_id":"column-336973","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336974","object_id":"column-336974","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336975","object_id":"column-336975","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336976","object_id":"column-336976","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336977","object_id":"column-336977","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336978","object_id":"column-336978","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336979","object_id":"column-336979","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336980","object_id":"column-336980","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336981","object_id":"column-336981","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336982","object_id":"column-336982","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336983","object_id":"column-336983","name":"dshippingdate","name_without_path":"dshippingdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336984","object_id":"column-336984","name":"forderquantity","name_without_path":"forderquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336985","object_id":"column-336985","name":"fordertaxprice","name_without_path":"fordertaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"exprice: decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336986","object_id":"column-336986","name":"fordertaxmoney","name_without_path":"fordertaxmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336987","object_id":"column-336987","name":"fnatordertaxprice","name_without_path":"fnatordertaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"exprice: decimal","data_length":"18, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336988","object_id":"column-336988","name":"fnatordertaxmoney","name_without_path":"fnatordertaxmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336989","object_id":"column-336989","name":"forderdiscount","name_without_path":"forderdiscount","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336990","object_id":"column-336990","name":"fnatorderdiscount","name_without_path":"fnatorderdiscount","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336991","object_id":"column-336991","name":"fChangRate","name_without_path":"fChangRate","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336992","object_id":"column-336992","name":"citem_cname","name_without_path":"citem_cname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336993","object_id":"column-336993","name":"citemcode","name_without_path":"citemcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336994","object_id":"column-336994","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336995","object_id":"column-336995","name":"citemname","name_without_path":"citemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336996","object_id":"column-336996","name":"fconsignmentsaleqty","name_without_path":"fconsignmentsaleqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336997","object_id":"column-336997","name":"fconsignmenttaxprice","name_without_path":"fconsignmenttaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336998","object_id":"column-336998","name":"fconsignmentsalemoney","name_without_path":"fconsignmentsalemoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336999","object_id":"column-336999","name":"fnatconsignmenttaxprice","name_without_path":"fnatconsignmenttaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337000","object_id":"column-337000","name":"fnatconsignmentsalemoney","name_without_path":"fnatconsignmentsalemoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337001","object_id":"column-337001","name":"finvoiceqty","name_without_path":"finvoiceqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337002","object_id":"column-337002","name":"finvoicetaxprice","name_without_path":"finvoicetaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337003","object_id":"column-337003","name":"finvoicemoney","name_without_path":"finvoicemoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337004","object_id":"column-337004","name":"fnatinvoicetaxprice","name_without_path":"fnatinvoicetaxprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337005","object_id":"column-337005","name":"fnatinvoicemoney","name_without_path":"fnatinvoicemoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337006","object_id":"column-337006","name":"fnatfobmoney","name_without_path":"fnatfobmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337007","object_id":"column-337007","name":"fBackTaxRate","name_without_path":"fBackTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337008","object_id":"column-337008","name":"cCusInvCode","name_without_path":"cCusInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-337009","object_id":"column-337009","name":"cCusInvName","name_without_path":"cCusInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};