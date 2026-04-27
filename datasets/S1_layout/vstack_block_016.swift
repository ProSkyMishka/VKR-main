import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("vb016-line1")
                .font(.title2)
                .bold()
            Text("vb016-line2")
                .font(.body)
            Text("vb016-line3")
                .font(.body)
            Text("vb016-line4")
                .font(.body)
            Text("vb016-line5")
                .font(.body)
            Text("vb016-line6")
                .font(.body)
        }
        .padding(12)
        .background(Color(white: 0.9400000000000001))
    }
}
