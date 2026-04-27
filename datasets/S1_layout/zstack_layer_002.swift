import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(6)
                .frame(width: 122, height: 62)
            VStack(spacing: 4) {
                Text("zl002-back")
                    .font(.caption)
                Text("zl002-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
