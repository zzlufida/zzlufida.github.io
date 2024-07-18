window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11518","name":"IMBillForIMAscend","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW IMBillForIMAscend as \r\n\r\nselect  im_invoice.ccode as cpbvcode,im_invoice.ddate as dpbvdate,im_invoice.cvencode, \r\n\tvoicetype.enumname as cpbvbilltype,vouchtype.enumname as cvouchname,\r\n\tvendor.cvenabbname,im_invoice.cptcode, purchasetype.cptname,im_invoice.cexch_name,\r\n\tim_invoicedetail.cinvcode,inventory.cinvname, inventory.cinvstd, inventory.cinvaddcode,\r\n\tim_invoicedetail.cpucomunitcode as cunitid, inventory.ccomunitcode as ccomunitcode,\r\n\tunit1.ccomunitname AS cinvm_unit,\r\n\tCASE WHEN isnull(inventory.igrouptype, 0) = 0 THEN NULL ELSE unit2.ccomunitname END AS cinva_unit,\r\n\tim_invoicedetail.fquantity as ipbvquantity,im_invoicedetail.fnum as inum ,\r\n\t(case when isnull(im_invoicedetail.itaxrate,0)=0 then fprice else  ftaxprice end ) as ioritaxcost, \r\n\t(case when isnull(im_invoicedetail.itaxrate,0)=0 then fmoney else  ftaxmoney end) as iorisum,\r\n\tisnull(fpaymoney,0) as ioritotal ,(case when isnull(im_invoicedetail.itaxrate,0)=0 then fmoney else  ftaxmoney end)-isnull(fpaymoney,0) as  inooritotal,\r\n      \tisnull(im_invoicedetail.fchangrate,0) AS iinvexchrate,\r\n\t im_invoice.cvouchtype,im_invoice.ivtid as vt_id,\r\n\tim_invoice.id as pbvid,im_invoicedetail.iorderautoid as iposid\r\nFROM \tim_invoicedetail \r\n\tleft JOIN im_invoice ON im_invoicedetail.id = im_invoice.id\r\n\tLEFT JOIN  Inventory ON im_invoicedetail.cInvCode = Inventory.cInvCode\r\n\tLEFT JOIN  ComputationUnit AS Unit1 ON inventory.cComUnitCode = Unit1.cComUnitCode     \r\n     \tLEFT JOIN ComputationUnit AS Unit2 ON im_invoicedetail.cpucomunitcode = Unit2.cComUnitCode  \r\n\tLEFT join vendor on im_invoice.cvencode = vendor.cvencode\r\n\tleft join purchasetype on im_invoice.cptcode = purchasetype.cptcode\r\n  \tleft join v_aa_enum voicetype on voicetype.enumtype ='im.invoicetype' and voicetype.enumcode = im_invoice.cinvoicetypecode   \r\n\tleft join v_aa_enum vouchtype on  vouchtype.enumtype ='ST.VouchSource' and vouchtype.enumcode=N'进口发票'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IMBillForIMAscend"},{"field":"Type","value":"View"}],"columns":[{"id":"column-235028","object_id":"column-235028","name":"cpbvcode","name_without_path":"cpbvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235029","object_id":"column-235029","name":"dpbvdate","name_without_path":"dpbvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235030","object_id":"column-235030","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235031","object_id":"column-235031","name":"cpbvbilltype","name_without_path":"cpbvbilltype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235032","object_id":"column-235032","name":"cvouchname","name_without_path":"cvouchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235033","object_id":"column-235033","name":"cvenabbname","name_without_path":"cvenabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235034","object_id":"column-235034","name":"cptcode","name_without_path":"cptcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235035","object_id":"column-235035","name":"cptname","name_without_path":"cptname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235036","object_id":"column-235036","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235037","object_id":"column-235037","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235038","object_id":"column-235038","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235039","object_id":"column-235039","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235040","object_id":"column-235040","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235041","object_id":"column-235041","name":"cunitid","name_without_path":"cunitid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235042","object_id":"column-235042","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235043","object_id":"column-235043","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235044","object_id":"column-235044","name":"cinva_unit","name_without_path":"cinva_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235045","object_id":"column-235045","name":"ipbvquantity","name_without_path":"ipbvquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235046","object_id":"column-235046","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"exdecimal: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235047","object_id":"column-235047","name":"ioritaxcost","name_without_path":"ioritaxcost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235048","object_id":"column-235048","name":"iorisum","name_without_path":"iorisum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235049","object_id":"column-235049","name":"ioritotal","name_without_path":"ioritotal","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235050","object_id":"column-235050","name":"inooritotal","name_without_path":"inooritotal","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235051","object_id":"column-235051","name":"iinvexchrate","name_without_path":"iinvexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235052","object_id":"column-235052","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235053","object_id":"column-235053","name":"vt_id","name_without_path":"vt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235054","object_id":"column-235054","name":"pbvid","name_without_path":"pbvid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235055","object_id":"column-235055","name":"iposid","name_without_path":"iposid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};