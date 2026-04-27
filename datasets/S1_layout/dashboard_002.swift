import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("db002-header")
                    .font(.title2)
                    .bold()
                Spacer()
                Image(systemName: "bell.fill")
            }
            HStack(spacing: 12) {
                VStack { Text("db002-metric1").font(.caption); Text("\(14)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
                VStack { Text("db002-metric2").font(.caption); Text("\(22)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
                VStack { Text("db002-metric3").font(.caption); Text("\(26)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
            }
            Divider()
            Text("db002-note")
                .font(.callout)
                .foregroundColor(.secondary)
        }
        .padding()
    }
}
