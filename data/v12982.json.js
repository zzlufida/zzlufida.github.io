window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12982","name":"v_ex_EntryLedgerBuffer_Consignment_Close","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_EntryLedgerBuffer_Consignment_Close  \r\nas  \r\nselect N'030101' as subject,--对应预计出库量\r\ncase when inventory.iGroupType=2 then isnull(con.fnum ,0) else 0 end as inum, isnull(con.fquantity ,0) as iquantity,isnull(coutwhcode,'') as cwhcode ,con.cinvcode,   \r\nisnull(con.cVMIVenCode,'') as cVMIVenCode, isnull(cbatch,'') as cbatch ,'EX24' as documenttype , id as documentid , autoid as documentdid ,  \r\n\r\n\r\n-- isnull(idemandtype,0) as DemandPlanType, \r\n-- isnull(cdemandid,'')  as demandplandid,  \r\n\r\ncase lower(inventory.cSRPolicy) \r\n\twhen 'pe' then 3\r\n\telse isnull(con.idemandtype,0) \r\nend\r\nas DemandPlanType,\r\ncase lower(inventory.cSRPolicy) \r\n\twhen 'pe' then convert(nvarchar(60),con.iorderautoid)\r\n\telse isnull(con.cdemandid,'') \r\nend\r\nas demandplandid, \r\n\r\nisnull(cfree1,'') as cfree1,isnull(cfree2,'') as cfree2,isnull(cfree3,'') as cfree3,isnull(cfree4,'') as cfree4,isnull(cfree5,'') as cfree5,  \r\nisnull(cfree6,'') as cfree6,isnull(cfree7,'') as cfree7,isnull(cfree8,'') as cfree8,isnull(cfree9,'') as cfree9,isnull(cfree10,'') as cfree10,  \r\ndprodate as dmdate,dvdate,imassunitid as imassunit,con.imassdate as imassday,  \r\nisnull(foutqty,0)as foutqty,\r\ncase when inventory.iGroupType=2 then isnull(foutnum,0) else 0 end as foutnum,\r\nisnull(funoutqty,0) as funoutqty,\r\ncase when inventory.iGroupType=2 then isnull(funoutnum ,0) else 0 end as funoutnum ,isnull(fquantity,0) as ibillquantity , \r\nisnull(fnum,0) as ibillnum   ,inventory.cSRPolicy,\r\ncon.iExpiratDateCalcu, con.cExpirationdate, con.dExpirationdate,inventory.btrack,\r\ncon.cincode,con.iinautoid,con.cinvouchtype,con.fchangrate,con.csacomunitcode,con.idemandseq,con.cdemandcode\r\n--,cBusType,cSource,ddate  \r\nfrom ex_consignmentdetail con    \r\nleft join inventory on con.cinvcode = inventory.cinvcode\r\nwhere isnull(con.iststatus,1)=1  \r\n  \r\n  \r\nunion all   \r\n  \r\nselect N'030101' as subject,--对应预计出库量\r\ncase when inventory.iGroupType=2 then isnull(sto.fstnum,0) else 0 end  as inum,isnull(sto.fstquantity,0) as iquantity,  \r\n isnull(sto.coutwhcode,'') as cwhcode ,sto.cinvcode,   \r\nisnull(con.cVMIVenCode,'') as cVMIVenCode, isnull(sto.cbatch,'') as cbatch ,'EX24' as documenttype , con.id as documentid , con.autoid as documentdid ,\r\n\r\n-- isnull(con.idemandtype,0) as DemandPlanType, \r\n-- isnull(con.cdemandid,'')  as demandplandid,  \r\n\r\n\r\ncase lower(inventory.cSRPolicy) \r\n\twhen 'pe' then 3\r\n\telse isnull(con.idemandtype,0) \r\nend\r\nas DemandPlanType,\r\ncase lower(inventory.cSRPolicy) \r\n\twhen 'pe' then convert(nvarchar(60),con.iorderautoid)\r\n\telse isnull(con.cdemandid,'') \r\nend\r\nas demandplandid, \r\n\r\nisnull(sto.cfree1,'') as cfree1,isnull(sto.cfree2,'') as cfree2,isnull(sto.cfree3,'') as cfree3,isnull(sto.cfree4,'') as cfree4,isnull(sto.cfree5,'') as cfree5,  \r\nisnull(sto.cfree6,'') as cfree6,isnull(sto.cfree7,'') as cfree7,isnull(sto.cfree8,'') as cfree8,isnull(sto.cfree9,'') as cfree9,isnull(sto.cfree10,'') as cfree10,  \r\nsto.dprodate as dmdate,sto.dvdate,sto.imassunitid as imassunit,sto.imassdate as imassday,  \r\nisnull(sto.foutqty,0)as foutqty,\r\ncase when inventory.iGroupType=2 then isnull(sto.foutnum,0) else 0 end as foutnum,\r\n0 as funoutqty,0 as funoutnum ,isnull(sto.fquantity,0) as ibillquantity , isnull(sto.fnum,0) as ibillnum   ,inventory.cSRPolicy,\r\ncon.iExpiratDateCalcu, con.cExpirationdate, con.dExpirationdate,inventory.btrack,con.cincode,con.iinautoid,con.cinvouchtype,con.fchangrate,con.csacomunitcode,con.idemandseq,con.cdemandcode\r\n--,cBusType,cSource,ddate  \r\nfrom ex_consignmentdetail con    \r\nleft join inventory on con.cinvcode = inventory.cinvcode\r\ninner join ex_stockupdetail sto on con.guids = sto.guid_source  \r\nwhere isnull(con.iststatus,1)=0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_EntryLedgerBuffer_Consignment_Close"},{"field":"Type","value":"View"}],"columns":[{"id":"column-336008","object_id":"column-336008","name":"subject","name_without_path":"subject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336009","object_id":"column-336009","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336010","object_id":"column-336010","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336011","object_id":"column-336011","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336012","object_id":"column-336012","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336013","object_id":"column-336013","name":"cVMIVenCode","name_without_path":"cVMIVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336014","object_id":"column-336014","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336015","object_id":"column-336015","name":"documenttype","name_without_path":"documenttype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336016","object_id":"column-336016","name":"documentid","name_without_path":"documentid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336017","object_id":"column-336017","name":"documentdid","name_without_path":"documentdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336018","object_id":"column-336018","name":"DemandPlanType","name_without_path":"DemandPlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336019","object_id":"column-336019","name":"demandplandid","name_without_path":"demandplandid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336020","object_id":"column-336020","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336021","object_id":"column-336021","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336022","object_id":"column-336022","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336023","object_id":"column-336023","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336024","object_id":"column-336024","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336025","object_id":"column-336025","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336026","object_id":"column-336026","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336027","object_id":"column-336027","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336028","object_id":"column-336028","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336029","object_id":"column-336029","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336030","object_id":"column-336030","name":"dmdate","name_without_path":"dmdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336031","object_id":"column-336031","name":"dvdate","name_without_path":"dvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336032","object_id":"column-336032","name":"imassunit","name_without_path":"imassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336033","object_id":"column-336033","name":"imassday","name_without_path":"imassday","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336034","object_id":"column-336034","name":"foutqty","name_without_path":"foutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336035","object_id":"column-336035","name":"foutnum","name_without_path":"foutnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336036","object_id":"column-336036","name":"funoutqty","name_without_path":"funoutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336037","object_id":"column-336037","name":"funoutnum","name_without_path":"funoutnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336038","object_id":"column-336038","name":"ibillquantity","name_without_path":"ibillquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336039","object_id":"column-336039","name":"ibillnum","name_without_path":"ibillnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336040","object_id":"column-336040","name":"cSRPolicy","name_without_path":"cSRPolicy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336041","object_id":"column-336041","name":"iExpiratDateCalcu","name_without_path":"iExpiratDateCalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336042","object_id":"column-336042","name":"cExpirationdate","name_without_path":"cExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336043","object_id":"column-336043","name":"dExpirationdate","name_without_path":"dExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336044","object_id":"column-336044","name":"btrack","name_without_path":"btrack","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336045","object_id":"column-336045","name":"cincode","name_without_path":"cincode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336046","object_id":"column-336046","name":"iinautoid","name_without_path":"iinautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336047","object_id":"column-336047","name":"cinvouchtype","name_without_path":"cinvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336048","object_id":"column-336048","name":"fchangrate","name_without_path":"fchangrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336049","object_id":"column-336049","name":"csacomunitcode","name_without_path":"csacomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336050","object_id":"column-336050","name":"idemandseq","name_without_path":"idemandseq","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336051","object_id":"column-336051","name":"cdemandcode","name_without_path":"cdemandcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};