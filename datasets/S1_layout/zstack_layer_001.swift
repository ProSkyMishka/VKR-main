import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(5)
                .frame(width: 121, height: 61)
            VStack(spacing: 4) {
                Text("zl001-back")
                    .font(.caption)
                Text("zl001-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
