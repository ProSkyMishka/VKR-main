import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc012-name")
                    .font(.title2)
                    .bold()
                Text("pc012-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc012-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc012-posts"); Text("\(22)").bold() }
                VStack { Text("pc012-followers"); Text("\(112)").bold() }
                VStack { Text("pc012-likes"); Text("\(1012)").bold() }
            }
        }
        .padding()
    }
}
