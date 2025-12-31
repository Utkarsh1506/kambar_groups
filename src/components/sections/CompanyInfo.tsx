"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpVariants, containerVariants } from "@/lib/animations";
import { kambarGroupInfo } from "@/data";
import { Building2, Users, Globe, CheckCircle } from "lucide-react";

export default function CompanyInfo() {
  const { companies, teamMembers, futureExpansion } = kambarGroupInfo;

  return (
    <section id="company-info" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Kambar Groups Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              ABOUT KAMBAR GROUPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Trusted FMCG Distributor Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kambar Groups operates three specialized companies dedicated to providing premium FMCG products and distribution services across India.
            </p>
          </motion.div>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h3 variants={fadeInUpVariants} className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Companies
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                variants={fadeInUpVariants}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-emerald-100 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Est. {company.establishedYear}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h4>
                <p className="text-sm text-emerald-600 font-semibold mb-4 pb-4 border-b border-emerald-100">{company.type}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{company.description}</p>

                {company.vision.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm">Vision & Goals</h5>
                    <ul className="space-y-2">
                      {company.vision.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {company.operations.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm">Operations</h5>
                    <ul className="space-y-2">
                      {company.operations.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {company.products.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm">Products & Services</h5>
                    <ul className="space-y-2">
                      {company.products.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h3 variants={fadeInUpVariants} className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </motion.h3>
          
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={fadeInUpVariants}
                  className="text-center"
                >
                  <div className="mb-6">
                    <div className="relative w-48 h-48 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      {member.image && member.image !== '/team/sandeep.jpg' ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      ) : (
                        <Users className="w-24 h-24 text-white opacity-50" />
                      )}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-emerald-600 font-semibold mb-4">{member.position}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Expansion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-12 text-white text-center"
        >
          <motion.div variants={fadeInUpVariants} className="flex justify-center mb-4">
            <Globe className="w-12 h-12" />
          </motion.div>
          <motion.h3 variants={fadeInUpVariants} className="text-2xl md:text-3xl font-bold mb-4">
            Global Expansion
          </motion.h3>
          <motion.p variants={fadeInUpVariants} className="text-lg text-emerald-100">
            {futureExpansion}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
