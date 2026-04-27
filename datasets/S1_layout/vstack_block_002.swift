import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("vb002-line1")
                .font(.title2)
                .bold()
            Text("vb002-line2")
                .font(.body)
            Text("vb002-line3")
                .font(.body)
            Text("vb002-line4")
                .font(.body)
            Text("vb002-line5")
                .font(.body)
        }
        .padding(14)
        .background(Color(white: 0.9400000000000001))
    }
}
