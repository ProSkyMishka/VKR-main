import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(19)
                .frame(width: 135, height: 75)
            VStack(spacing: 4) {
                Text("zl015-back")
                    .font(.caption)
                Text("zl015-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
