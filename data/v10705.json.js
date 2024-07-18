window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10705","name":"EXOrderAscendDis","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create VIEW EXOrderAscendDis\r\nAS \r\nselect ex_bustype.cbustype as cbustype,\r\n(case ex_consignment.cvouchtype when N'EX25' then ex_consignment.cunconsignmentcode else ex_consignment.ccode end) as cdlcode, \r\nex_consignment.cstcode, saletype.cstname, convert(varchar(10),ex_consignment.ddate,121) as ddate, ex_consignment.cdepcode, department.cdepname, \r\nex_consignment.cpersoncode, person.cpersonname, ex_consignment.ccuscode, customer.ccusabbname, ex_consignment.cexch_name, ex_consignment.ccusoaddress as cdeliverunit,\r\nwarehouse.cwhname, ex_consignmentdetail.coutwhcode as cwhcode, \r\nex_consignmentdetail.cinvcode, inventory.cinvaddcode, inventory.cinvname, inventory.cinvstd, ex_consignmentdetail.csacomunitcode as cunitid, unit1.ccomunitname as cinvm_unit,inventory.igrouptype,inventory.cgroupcode,\r\ncase when isnull(inventory.igrouptype,0)=0 then null else unit2.ccomunitname end as cinva_unit, \r\n(case when igrouptype=0 then null else  ex_consignmentdetail.fnum  end)  as inum,ex_consignmentdetail.fchangrate as iinvexchrate,\r\nex_consignmentdetail.fquantity as iquantity, \r\n(case ex_consignment.cvouchtype when N'EX25' then ex_consignmentdetail.funinvoicemoney else ex_consignmentdetail.finvoicemoney end) as isettlenum,\r\n(case ex_consignment.cvouchtype when N'EX25' then ex_consignmentdetail.funinvoiceqty else ex_consignmentdetail.finvoiceqty end) as isettlequantity,\r\n ex_consignmentdetail.fmoney as imoney, \r\nex_consignmentdetail.cbatch,ex_consignmentdetail.fnatmoney as inatmoney, ex_consignmentdetail.fnattaxmoney as inatsum, ex_consignmentdetail.ftaxmoney as isum, \r\nnull as ibatch,ex_consignmentdetail.dvdate,ex_consignmentdetail.dprodate as dmdate,ex_consignmentdetail.imassdate,v_enum.enumname as cmassunit,\r\nex_consignmentdetail.iorderautoid as isosid, ex_consignmentdetail.autoid as idlsid, null as cvenabbname,inventory.cinvccode,null as ccode,foutqty as foutquantity,\r\nfoutnum,null as cvmivencode,null as cvmivenname,\r\nisnull(fgatheringmoney,0) as imoneysum,isnull(fgatheringmoney,0) as iexchsum,\r\nisnull(ex_consignmentdetail.fquantity,0)-isnull(foutqty,0) as inooutquantity,\r\nisnull(ex_consignmentdetail.fquantity,0)-isnull(finvoiceqty,0) as inosettlequantity,\r\nisnull(ex_consignmentdetail.ftaxmoney,0)-isnull(fgatheringmoney,0) as inomoneysum, cvouchtype,\r\nv_aa_enum.enumname as cvouchname,ex_consignment.id as dlid,ivtid as vt_id,\r\nex_consignmentdetail.cbatchproperty1,ex_consignmentdetail.cbatchproperty2,ex_consignmentdetail.cbatchproperty3,\t\r\nex_consignmentdetail.cbatchproperty4,ex_consignmentdetail.cbatchproperty5,ex_consignmentdetail.cbatchproperty6,\t\r\nex_consignmentdetail.cbatchproperty7,ex_consignmentdetail.cbatchproperty8,ex_consignmentdetail.cbatchproperty9,\r\nex_consignmentdetail.cbatchproperty10,cexpirationdate,iexpiratdatecalcu \t \r\nFROM ex_consignment inner join ex_consignmentdetail on ex_consignment.id=ex_consignmentdetail.id\r\nLEFT JOIN Customer ON ex_consignment.cCusCode = Customer.cCusCode \r\nLEFT OUTER JOIN Department ON ex_consignment.cDepCode = Department.cDepCode \r\nLEFT OUTER JOIN Person ON ex_consignment.cPersonCode = Person.cPersonCode\r\n LEFT OUTER JOIN SaleType ON ex_consignment.cSTCode = SaleType.cSTCode \r\ninner JOIN Inventory ON ex_consignmentdetail.cInvCode = Inventory.cInvCode \r\nLEFT JOIN Warehouse ON ex_consignmentdetail.coutwhcode = Warehouse.cWhCode \r\nleft join ComputationUnit as Unit1 on inventory.cComUnitCode=Unit1.cComUnitCode\r\nleft join ComputationUnit as Unit2 on ex_consignmentdetail.csacomunitcode=Unit2.cComUnitCode\r\nleft join v_aa_enum on (v_aa_enum.enumtype=N'ST.EXType' and v_aa_enum.enumcode=cvouchtype)\r\nleft join v_aa_enum v_enum on v_enum.enumcode=ex_consignmentdetail.imassunitid and v_enum.enumtype='ST.MassUnit' \r\nleft join ex_bustype on ex_consignment.ibustypeid=ex_bustype.ibustype and langid=@@langid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EXOrderAscendDis"},{"field":"Type","value":"View"}],"columns":[{"id":"column-202658","object_id":"column-202658","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202659","object_id":"column-202659","name":"cdlcode","name_without_path":"cdlcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202660","object_id":"column-202660","name":"cstcode","name_without_path":"cstcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202661","object_id":"column-202661","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202662","object_id":"column-202662","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202663","object_id":"column-202663","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202664","object_id":"column-202664","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202665","object_id":"column-202665","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202666","object_id":"column-202666","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202667","object_id":"column-202667","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202668","object_id":"column-202668","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202669","object_id":"column-202669","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202670","object_id":"column-202670","name":"cdeliverunit","name_without_path":"cdeliverunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202671","object_id":"column-202671","name":"cwhname","name_without_path":"cwhname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202672","object_id":"column-202672","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202673","object_id":"column-202673","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202674","object_id":"column-202674","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202675","object_id":"column-202675","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202676","object_id":"column-202676","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202677","object_id":"column-202677","name":"cunitid","name_without_path":"cunitid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202678","object_id":"column-202678","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202679","object_id":"column-202679","name":"igrouptype","name_without_path":"igrouptype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202680","object_id":"column-202680","name":"cgroupcode","name_without_path":"cgroupcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202681","object_id":"column-202681","name":"cinva_unit","name_without_path":"cinva_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202682","object_id":"column-202682","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202683","object_id":"column-202683","name":"iinvexchrate","name_without_path":"iinvexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202684","object_id":"column-202684","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202685","object_id":"column-202685","name":"isettlenum","name_without_path":"isettlenum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202686","object_id":"column-202686","name":"isettlequantity","name_without_path":"isettlequantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202687","object_id":"column-202687","name":"imoney","name_without_path":"imoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202688","object_id":"column-202688","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202689","object_id":"column-202689","name":"inatmoney","name_without_path":"inatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202690","object_id":"column-202690","name":"inatsum","name_without_path":"inatsum","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202691","object_id":"column-202691","name":"isum","name_without_path":"isum","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202692","object_id":"column-202692","name":"ibatch","name_without_path":"ibatch","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202693","object_id":"column-202693","name":"dvdate","name_without_path":"dvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202694","object_id":"column-202694","name":"dmdate","name_without_path":"dmdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202695","object_id":"column-202695","name":"imassdate","name_without_path":"imassdate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202696","object_id":"column-202696","name":"cmassunit","name_without_path":"cmassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202697","object_id":"column-202697","name":"isosid","name_without_path":"isosid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202698","object_id":"column-202698","name":"idlsid","name_without_path":"idlsid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202699","object_id":"column-202699","name":"cvenabbname","name_without_path":"cvenabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202700","object_id":"column-202700","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202701","object_id":"column-202701","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202702","object_id":"column-202702","name":"foutquantity","name_without_path":"foutquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202703","object_id":"column-202703","name":"foutnum","name_without_path":"foutnum","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202704","object_id":"column-202704","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202705","object_id":"column-202705","name":"cvmivenname","name_without_path":"cvmivenname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202706","object_id":"column-202706","name":"imoneysum","name_without_path":"imoneysum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202707","object_id":"column-202707","name":"iexchsum","name_without_path":"iexchsum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202708","object_id":"column-202708","name":"inooutquantity","name_without_path":"inooutquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202709","object_id":"column-202709","name":"inosettlequantity","name_without_path":"inosettlequantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202710","object_id":"column-202710","name":"inomoneysum","name_without_path":"inomoneysum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202711","object_id":"column-202711","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202712","object_id":"column-202712","name":"cvouchname","name_without_path":"cvouchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202713","object_id":"column-202713","name":"dlid","name_without_path":"dlid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202714","object_id":"column-202714","name":"vt_id","name_without_path":"vt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202715","object_id":"column-202715","name":"cbatchproperty1","name_without_path":"cbatchproperty1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202716","object_id":"column-202716","name":"cbatchproperty2","name_without_path":"cbatchproperty2","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202717","object_id":"column-202717","name":"cbatchproperty3","name_without_path":"cbatchproperty3","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202718","object_id":"column-202718","name":"cbatchproperty4","name_without_path":"cbatchproperty4","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202719","object_id":"column-202719","name":"cbatchproperty5","name_without_path":"cbatchproperty5","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202720","object_id":"column-202720","name":"cbatchproperty6","name_without_path":"cbatchproperty6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202721","object_id":"column-202721","name":"cbatchproperty7","name_without_path":"cbatchproperty7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202722","object_id":"column-202722","name":"cbatchproperty8","name_without_path":"cbatchproperty8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202723","object_id":"column-202723","name":"cbatchproperty9","name_without_path":"cbatchproperty9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202724","object_id":"column-202724","name":"cbatchproperty10","name_without_path":"cbatchproperty10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202725","object_id":"column-202725","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202726","object_id":"column-202726","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};