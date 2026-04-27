import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("hb011-headline")
                    .font(.title)
                    .bold()
                Spacer()
                Text("hb011-tagline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(white: 0.96))
            VStack(alignment: .leading, spacing: 8) {
                Text("hb011-content paragraph")
                    .font(.body)
                Text("hb011-extra")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding()
            HStack {
                Spacer()
                Text("hb011-footer")
                    .font(.footnote)
                    .foregroundColor(.gray)
                Spacer()
            }
            .padding(.bottom, 8)
        }
    }
}
