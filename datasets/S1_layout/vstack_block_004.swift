import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("vb004-line1")
                .font(.title2)
                .bold()
            Text("vb004-line2")
                .font(.body)
            Text("vb004-line3")
                .font(.body)
            Text("vb004-line4")
                .font(.body)
            Text("vb004-line5")
                .font(.body)
            Text("vb004-line6")
                .font(.body)
            Text("vb004-line7")
                .font(.body)
        }
        .padding(16)
        .background(Color(white: 0.9600000000000001))
    }
}
