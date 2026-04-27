import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("db011-header")
                    .font(.title2)
                    .bold()
                Spacer()
                Image(systemName: "bell.fill")
            }
            HStack(spacing: 12) {
                VStack { Text("db011-metric1").font(.caption); Text("\(77)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
                VStack { Text("db011-metric2").font(.caption); Text("\(21)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
                VStack { Text("db011-metric3").font(.caption); Text("\(43)").font(.title3).bold() }
                    .frame(maxWidth: .infinity).padding(8).background(Color(white: 0.95)).cornerRadius(8)
            }
            Divider()
            Text("db011-note")
                .font(.callout)
                .foregroundColor(.secondary)
        }
        .padding()
    }
}
