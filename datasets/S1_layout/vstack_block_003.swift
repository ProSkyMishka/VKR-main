import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text("vb003-line1")
                .font(.title2)
                .bold()
            Text("vb003-line2")
                .font(.body)
            Text("vb003-line3")
                .font(.body)
            Text("vb003-line4")
                .font(.body)
            Text("vb003-line5")
                .font(.body)
            Text("vb003-line6")
                .font(.body)
        }
        .padding(15)
        .background(Color(white: 0.9500000000000001))
    }
}
