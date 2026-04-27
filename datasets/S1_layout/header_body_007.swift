import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("hb007-headline")
                    .font(.title)
                    .bold()
                Spacer()
                Text("hb007-tagline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(white: 0.96))
            VStack(alignment: .leading, spacing: 8) {
                Text("hb007-content paragraph")
                    .font(.body)
                Text("hb007-extra")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding()
            HStack {
                Spacer()
                Text("hb007-footer")
                    .font(.footnote)
                    .foregroundColor(.gray)
                Spacer()
            }
            .padding(.bottom, 8)
        }
    }
}
